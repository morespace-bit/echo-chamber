import React from "react";

function CreateFeed({ userData, setImageUpload }) {
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
            type="text"
            placeholder={`What's on your mind, ${userData?.username}`}
            className="w-full px-3 outline-none placeholder:text-xl"
            onSelect={true}
          />
        </div>
        {/* image upload div */}
        <div className="border-2 border-gray-100 rounded-xl mt-3">
          <input
            type="file"
            className="h-50 flex justify-center items-center bg-gray-300 hover:bg-gray-100 duration-75 ease-in rounded-2xl p-2"
          />
        </div>
        {/* post button */}

        <div className="w-full flex items-center justify-center mt-4">
          <button className="bg-blue-300 w-full rounded-xl p-2 hover:bg-blue-500 duration-75 ease-in active:scale-95 hover:scale-105 ">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateFeed;
