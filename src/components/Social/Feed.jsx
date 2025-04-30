import { useState, useEffect } from "react";
import { auth, db } from "../Firebase/config";
import { collection, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import CreateFeed from "./CreateFeed";

export default function Feed() {
  const access = "NwOv9pWQXKBglEwy86f3MuovcXmg6_I9j3eREpqFf5U";
  const [img, setImg] = useState([]);
  const [userData, setUserData] = useState(null);
  const [u_id, setUId] = useState(null); // Use state for UID
  const [imageUpload, setImageUpload] = useState(false);

  // Fetching images from Unsplash API
  async function get() {
    const res = await fetch(
      `https://api.unsplash.com/photos/?client_id=${access}`
    );
    const data = await res.json();
    setImg(data);
    console.log(data);
  }

  // Fetching user data from Firebase
  async function getUserProfile() {
    if (!u_id) return;
    const profileRef = doc(db, "User", u_id);
    const res = await getDoc(profileRef);
    if (res.exists()) {
      setUserData(res.data());
      console.log(res.data());
    } else {
      console.log("No profile found");
    }
  }

  useEffect(() => {
    // Handle user authentication state change
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User UID:", user.uid);
        setUId(user.uid); // Set the UID in state
      } else {
        console.log("No user logged in");
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this runs once

  // Fetch user profile and images once the user is authenticated
  useEffect(() => {
    getUserProfile(); // Fetch user data only after u_id is set

    get(); // Fetch Unsplash images
  }, [u_id]); // Run this effect when u_id changes

  return (
    <>
      <div className="flex w-full md:justify-between items-center justify-center flex-9/12 bg-gray-200 overflow-x-hidden overflow-y-auto">
        {/* Left part */}
        <div className="hidden md:block fixed left-0 top-30 h-full">
          <h1>Lefts</h1>
        </div>

        {/* Center part */}
        <div className="w-full text-center p-6 flex justify-center items-center flex-col overflow-y-auto mx-h-[100%] ">
          {/* Create feed and user name part */}
          <div className="flex p-6 bg-white mb-5 rounded-xl shadow-xl max-w-150 flex-col gap-4">
            <div className="flex flex-row gap-6">
              {/* user profile */}
              <div className="rounded-full overflow-hidden w-10 h-10 ">
                <img
                  src={userData?.Photo}
                  alt=""
                  className=" object-cover w-full h-full cursor-pointer"
                />
              </div>
              <input
                type="text"
                className="bg-gray-200 rounded-2xl px-5 py-3 w-80 md:w-120 cursor-pointer"
                placeholder={`What's on your mind, ${userData?.username}`}
              />
            </div>
            <div className="flex flex-row justify-around items-center">
              <div
                className="flex flex-row items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-xl duration-75 ease-in p-2"
                onClick={() => {
                  setImageUpload((pre) => !pre);
                }}
              >
                <img src={"/image.png"} alt="" className="h-10" />
                <p>Images</p>
              </div>
              <div
                className="flex flex-row items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-xl duration-75 ease-in p-2"
                onClick={() => {
                  setImageUpload((pre) => !pre);
                }}
              >
                <img src={"/thought-bubble.png"} alt="" className="h-10" />
                <p>Thoughts</p>
              </div>
              <div
                className="flex flex-row items-center gap-1 cursor-pointer hover:bg-gray-100 rounded-xl duration-75 ease-in p-2"
                onClick={() => {
                  setImageUpload((pre) => !pre);
                }}
              >
                <img src={"/activity.png"} alt="" className="h-10" />
                <p>Activity</p>
              </div>
            </div>
          </div>
          {img.map((i) => (
            <div
              key={i.id}
              className="flex p-6 bg-white mb-5 rounded-xl shadow-xl max-h-180 max-w-150 flex-col"
            >
              {/* Profile and date uploaded */}
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={i.user.profile_image.large}
                  alt=""
                  className="w-10 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <p className="tracking-widest">{i.user.first_name}</p>
                  <p className="text-xs">4 hours ago</p>
                </div>
              </div>
              {/* Description */}
              <div className="flex">
                <p className="left">{i.description}</p>
              </div>
              <div className="mx-h-140 overflow-hidden rounded-xl">
                <img
                  src={i.urls.regular}
                  alt=""
                  className="rounded-xl w-full "
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right part */}
        <div className="r-0 t-20 fixed">
          <h1>Right</h1>
        </div>
        {imageUpload == true && (
          <CreateFeed userData={userData} setImageUpload={setImageUpload} />
        )}
      </div>
    </>
  );
}
