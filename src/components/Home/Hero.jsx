function Hero() {
  return (
    <>
      <div className=" relative border-t-[0.2px] border-white bg-blue-600 h-185 flex px-6 bg-[url('/map.jpg')] bg-center bg-blend-overlay bg-cover ">
        <div className="absolute  bg-blue-600/60 inset-0"></div>

        {/* the text content and discover button  */}
        <div className="bg-[url('/map.jpg')] h-40"></div>
        <div className="flex absolute bottom-30  flex-col">
          {/* text and echo-chamber community */}
          <div className="flex flex-col text-left">
            <p className="text-3xl text-white font-bold font-sans">
              Echo-Chamber. Community
            </p>
            <p className="mt-3 text-[17px] font-semibold text-white font-sans">
              This is the place to share peace and vibes and have turly fun.
            </p>
            <p className="text-[17px] font-semibold text-white font-sans">
              A non-political place!
            </p>
          </div>
          {/* how many people connected */}
          <div className="flex mt-8 flex-col text-left">
            <p className="text-3xl text-white font-semibold">10,24,553</p>
            <p className="mt-1 font-semibold text-white">Connected peoples</p>
            <p className="mt-1 font-semibold text-white">Enjoying peace</p>
          </div>

          <button className="py-3 text-left mt-8 border-1 w-40 px-7 border-white rounded-2xl text-white font-semibold cursor-pointer hover:bg-cyan-500 hover:scale-105 duration-150 ease-in-out">
            Discover Now
          </button>
        </div>
      </div>
    </>
  );
}
export default Hero;
