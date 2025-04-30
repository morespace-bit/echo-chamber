import React from "react";
import { useDispatch, useSelector } from "react-redux";
function CreateFeed() {
  const data = useSelector((state) => state.auth.userData);
  console.log(data);

  return (
    // main container
    <div className="bg-white rounded-xl shadow-xl ">
      {/* the profile and what's on your mind container */}
      <div className="flex">
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default CreateFeed;
