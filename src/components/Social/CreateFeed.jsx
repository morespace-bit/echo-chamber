import React, { useState } from "react";
import { db, auth } from "../Firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
function CreateFeed({ userData, setImageUpload, u_id, getPost }) {
  const [content, setContent] = useState(null);

  // function to get the file data and to upload to cloudniary
  const [url, setUrl] = useState("");
  async function Upload(e) {
    console.log(e.target.files);
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "file-upload");
    data.append("coud_name", "dvxidzrno");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvxidzrno/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const upload = await res.json();
    console.log(upload.url);
    setUrl(upload.url);
    console.log(url);
  }

  // the function to upload to the firebase data base firestore
  async function uploadFirebase() {
    console.log(content);
    console.log(url);
    if (!url || !content) {
      alert("Please make sure you are uploding file and there is content");
      return;
    }
    let postRef = collection(db, "Post");
    try {
      await addDoc(postRef, {
        Username: userData.username,
        Uid: u_id,
        Content: content,
        Url: url,
        Profile: userData.Photo,
        CreatedAt: serverTimestamp(),
      });
      setImageUpload((pre) => !pre);
      getPost();
    } catch (err) {
      console.log(err);
    }
  }
  console.log(userData);
  return (
    <div className=" fixed top-30 w-full flex justify-center items-center">
      {/* card container */}
      <div className=" rounded-xl shadow-2xl bg-white flex justify-center items-center flex-col w-110 md:w-140 relative p-4c">
        <h1 className="font-semibold text-2xl font-sans">Create post</h1>
        <img
          onClick={() => {
            console.log("Clicked");
            setImageUpload((pre) => !pre);
          }}
          src={"/close.png"}
          alt=""
          className="h-8 absolute right-3 top-2 bg-gray-100 rounded-full cursor-pointer hover:bg-red-300 duration-75 ease-in"
        />

        {/* divider div */}
        <div className="flex border-b-2 border-gray-100 w-full mt-2 mb-2"></div>
        {/* text file */}
        <div className="flex flex-row justify-start w-full">
          <input
            onChange={(e) => {
              setContent(e.target.value);
              
            }}
            type="text"
            placeholder={`What's on your mind, ${userData?.username}`}
            className="w-full px-3 outline-none placeholder:text-xl"
          />
        </div>
        {/* image upload div */}
        <div className="border-2 border-gray-100 rounded-xl mt-3">
          <input
            onChange={Upload}
            type="file"
            className="h-50 flex justify-center items-center bg-gray-300 hover:bg-gray-100 duration-75 ease-in rounded-2xl p-2"
          />
        </div>
        {/* post button */}

        <div className="w-full flex items-center justify-center mt-4">
          <button
            className="bg-blue-300 w-full rounded-xl p-2 hover:bg-blue-500 duration-75 ease-in active:scale-95 hover:scale-105 "
            onClick={uploadFirebase}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateFeed;
