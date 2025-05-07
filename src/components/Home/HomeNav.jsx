import { useState } from "react";

function HomeNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* main container */}
      <div className="flex items-center justify-between p-4 bg-blue-500 md:px-10 cursor-pointer">
        {/* for logo */}
        <div className="flex gap-2 items-center">
          <img src="/Main-logo.png" alt="" className="w-10 md:w-15" />
          <p className="text-2xl md:text-3xl text-white font-semibold font-mono">
            Echo-Chamber.
          </p>
        </div>

        {/* the hamburger sing and login button and other stuff*/}
        <div className="flex flex-row md:gap-10 gap-3 justify-center items-center">
          {/* the nav elements for md dispaly */}
          <div className="md:block hidden">
            <div className="flex justify-around gap-4 ">
              <p className="font-semibold p-2 text-left px-5 hover:bg-cyan-800 duration-200 ease-in-out cursor-pointer text-white rounded-xl">
                Home
              </p>
              <p className="font-semibold  border-white p-2 text-left  px-5 hover:bg-cyan-800 duration-200 ease-in-out cursor-pointer text-white rounded-xl">
                Comunity
              </p>
              <p className="font-semibold  border-white  p-2 text-left  px-5 hover:bg-cyan-800 duration-200 ease-in-out cursor-pointer text-white rounded-xl">
                Pages
              </p>
              <p className="font-semibold  border-white  p-2 text-left  px-5 hover:bg-cyan-800 duration-200 ease-in-out cursor-pointer text-white rounded-xl">
                Help
              </p>
            </div>
          </div>

          <button className="bg-white py-2 px-5 cursor-pointer hover:bg-sky-400 hover:text-white rounded-xs duration-100 ease-initial font-semibold hover:shadow-2xl shadow-cyan-200">
            Login
          </button>

          {/* hamburger sign  */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group h-8 w-8 rounded-lg  flex items-center justify-center"
            >
              <div className="grid justify-items-center gap-1.5 transition-all duration-300 ease-in-out">
                <span
                  className={`h-1 w-8 rounded-full bg-white transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`h-1 w-8 rounded-full bg-white transition-transform duration-300 ease-in-out ${
                    isOpen ? "scale-x-0" : ""
                  }`}
                ></span>
                <span
                  className={`h-1 w-8 rounded-full bg-white transition-transform duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="absolute flex flex-col w-full bg-cyan-200 top-17 left-0  gap-1 md:hidden">
            <p className="font-semibold p-2 text-left px-5 hover:bg-cyan-800 duration-200 ease-in-out cursor-pointer">
              Home
            </p>
            <p className="font-semibold border-t-2 border-white p-2 text-left  px-5 hover:bg-cyan-800 duration-200 ease-in-out cursor-pointer">
              Comunity
            </p>
            <p className="font-semibold border-t-2 border-white  p-2 text-left  px-5 hover:bg-cyan-800 duration-200 ease-in-out cursor-pointer">
              Pages
            </p>
            <p className="font-semibold border-t-2 border-white  p-2 text-left  px-5 hover:bg-cyan-800 duration-200 ease-in-out cursor-pointer">
              Help
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default HomeNav;
