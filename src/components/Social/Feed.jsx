import { useState, useEffect } from "react";
import { auth, db } from "../Firebase/config";
import {
  collection,
  doc,
  getDocs,
  query,
  orderBy,
  getDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import CreateFeed from "./CreateFeed";
import Comment from "./Comment";

export default function Feed() {
  const access = "NwOv9pWQXKBglEwy86f3MuovcXmg6_I9j3eREpqFf5U";
  const [img, setImg] = useState([]);
  const [userData, setUserData] = useState(null);
  const [u_id, setUId] = useState(""); // Use state for UID
  const [imageUpload, setImageUpload] = useState(false);
  const [post, setPost] = useState(null);
  const [likedPost, setLikedPost] = useState({});
  const [commentPost, setCommentPost] = useState({});
  const [likesOfPost, setLikesOfPost] = useState(null);

  // function to generate random likes
  const genLikes = (id) => {
    let likes = Math.floor(Math.random() * 500 + 1);

    setLikesOfPost((pre) => ({
      ...pre,
      [id]: likes,
    }));
  };

  // function to set liked and unlike ui
  const like = (id) => {
    setLikedPost((pre) => {
      return {
        ...pre,
        [id]: !pre[id],
      };
    });
    console.log(likedPost);
  };

  const comment = (id) => {
    setCommentPost((pre) => {
      return {
        ...pre,
        [id]: !pre[id],
      };
    });
  };

  // geting user profile form firebase
  async function getUserProfile() {
    if (!u_id) return;
    const profileRef = doc(db, "User", u_id);
    const res = await getDoc(profileRef);
    if (res.exists()) {
      setUserData(res.data());
    } else {
      console.log("No profile found");
    }
  }

  // getting user post form the firebase firestore
  async function getPost() {
    let postRef = collection(db, "Post");
    let q = query(postRef, orderBy("CreatedAt", "desc"));
    let res = await getDocs(q);
    let data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setPost(data);
    console.log(data[0].id);
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

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    getUserProfile();
    getPost();
  }, [u_id]);

  return (
    <>
      <div className="flex w-full md:justify-between items-center justify-center flex-9/12 bg-gray-200 overflow-x-hidden overflow-y-auto">
        {/* Left part */}
        <div className="hidden md:block fixed left-0 top-30 h-full">
          {/* card container   */}
          <div className="flex flex-col p-5 bg-gray-100 rounded-2xl ml-4 shadow-2xl h-[80%] mb-4">
            <div className="flex flex-row items-center gap-2  hover:bg-gray-300 p-3 rounded-xl cursor-pointer">
              <img src={"/group.png"} alt="" className="h-8" />
              <p className="">Friends</p>
            </div>

            <div className="flex flex-row items-center gap-2 mb-3  hover:bg-gray-300 p-3 rounded-xl cursor-pointer">
              <img src={"/history.png"} alt="" className="h-6" />
              <p className="">Memories</p>
            </div>
            <div className="flex flex-row items-center gap-2  hover:bg-gray-300 p-3 rounded-xl cursor-pointer">
              <img src={"/vibes.png"} alt="" className="h-6" />
              <p className="">Vibes</p>
            </div>
            <div className="flex flex-row items-center gap-2  hover:bg-gray-300 p-3 rounded-xl cursor-pointer">
              <img src={"/peace.png"} alt="" className="h-8" />
              <p className="">Peace</p>
            </div>
            <div className="flex flex-row items-center gap-2  hover:bg-gray-300 p-3 rounded-xl cursor-pointer">
              <img src={"/cpu.png"} alt="" className="h-8" />
              <p className="">Tech News</p>
            </div>
            <div className="flex flex-row items-center gap-2  hover:bg-gray-300 p-3 rounded-xl cursor-pointer">
              <img src={"/home.png"} alt="" className="h-8" />
              <p className="">Home Feed</p>
            </div>
          </div>
        </div>

        {/* Center part */}
        <div className="w-full text-center p-6 flex justify-center items-center flex-col overflow-y-auto mx-h-[100%]  ">
          {/* Create feed and user name part */}
          {/* feed creating part like the one which opens the create feed or post */}
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
                onClick={() => {
                  setImageUpload((pre) => !pre);
                }}
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

          {/* the acutal post starts from here */}

          {post?.map((i) => (
            <div
              key={i?.id}
              className="flex p-6 bg-white mb-5 rounded-xl shadow-xl max-h-180 max-w-150 flex-col"
            >
              {/* Profile and date uploaded */}
              <div className="mb-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
                  <img
                    src={i.Profile}
                    alt="profile-icon"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="tracking-widest">{i?.Username}</p>
                  <p className="text-xs">4 hours ago</p>
                </div>
              </div>
              {/* Description */}
              <div className="flex justify-start items-start mb-4">
                <p className="text-left">{i?.Content}</p>
              </div>
              {/* actual images and files */}
              <div className="mx-h-140 overflow-hidden rounded-xl">
                <img src={i?.Url} alt="" className="rounded-xl w-full " />
              </div>
              {/* divider for the comment and like */}
              <div className="border-b-2 border-gray-400 flex justify-center items-center mt-2"></div>
              <div className="flex flex-row px-2 py-2 justify-around">
                <div
                  className="flex flex-row gap-2 items-center cursor-pointer"
                  onClick={() => {
                    like(i.id);
                  }}
                >
                  <img
                    src={likedPost[i.id] ? "/red-love.png" : "/love.png"}
                    alt=""
                    className="h-6 hover:shadow-4xl hover:shadow-rose-500 duration-75 ease-in active:scale-95 hover:scale-120"
                  />
                  <p>Likes </p>
                </div>
                <div
                  className="flex flex-row gap-2 items-center cursor-pointer hover:shadow-4xl hover:shadow-rose-500 duration-75 ease-in active:scale-95 hover:scale-120"
                  onClick={() => {
                    comment(i.id);
                  }}
                >
                  <img src={"/comments.png"} alt="" className="h-6 " />
                  <p>Comments</p>
                </div>
              </div>
              <Comment
                userData={userData}
                postId={i.id}
                open={commentPost}
                close={comment}
              />
            </div>
          ))}
        </div>

        {/* Right part */}
        <div className="r-0 t-20 fixed">
          <h1>Right</h1>
        </div>
        {imageUpload == true && (
          <CreateFeed
            userData={userData}
            setImageUpload={setImageUpload}
            u_id={u_id}
            getPost={getPost}
          />
        )}
      </div>
    </>
  );
}
