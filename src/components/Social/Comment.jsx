export default function Comment({ userData }) {
  console.log(userData);
  return (
    //  main container of the comments
    <div className="flex justify-center items-center w-full bg-white mt-3">
      {/* now the add a comment section */}
      <div className="flex  items-center gap-3">
        {/* div for making the profile pic circle */}
        <div className="w-10 h-10 rounded-full  overflow-hidden border-2 border-gray-200">
          <img
            src={userData?.Photo}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        {/* the comment input type div */}
        <div className="flex items-center flex-1 min-w-90 max-w-170 md:w-120 bg-gray-200 rounded-xl p-2">
          <input
            type="text"
            className="w-full outline-none px-2"
            placeholder="Add a comment..."
          />
          <button className="p-2 bg-blue-300 px-4 rounded-2xl hover:bg-blue-500 hover:scale-105 active:scale-95 duration-75 ease-in">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
