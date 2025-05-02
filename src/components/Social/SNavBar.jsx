import React from "react";

function SNavBar() {
  return (
    <>
      {/* // main container */}
      <div className="bg-white w-full flex px-4 py-6 justify-between items-center md:px-10 sticky top-0 overflow-x-hidden shadow-2xs flex-3/12">
        {/* for logo  */}
        <div>
          <h1 className="font-black text-xl md:text-3xl text-black font-serif cursor-pointer ">
            Echo-Chamber.
          </h1>
        </div>
        {/* search bar */}
        <div className="bg-cyan-100 rounded-2xl px-4 py-2 flex gap-2 shadow-2xl">
          <img src="/search.svg" alt="" />
          <input
            type="text"
            className="outline-none md:w-50 w-20 lg:w-90"
            placeholder="Search for vibes and peace"
          />
        </div>
        {/* profile and notification */}

        <div className="flex items-center gap-3 md:gap-10">
          <img src="/notification.png" alt="" className="w-6 cursor-pointer" />
          <div className="rounded-full overflow-hidden w-10 h-10">
            <img
              src="/water.jpg"
              alt=""
              className=" object-cover w-full h-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SNavBar;
