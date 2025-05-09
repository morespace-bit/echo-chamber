export default function Footer() {
  // class contaier
  return (
    <div className="mt-80 h-200 pt-30">
      <div className="flex bg-blue-500 h-200 flex-col pt-10 px-5">
        {/* logo and the echo chamber name */}
        <div className="flex flex-row items-center">
          <img src="/Main-logo.png" alt="" className="w-15" />
          <p className="text-3xl font-semibold text-white">Echo-Chamber.</p>
        </div>

        {/* the text part */}

        <div className="text-left px-2">
          <p className="text-xl mt-3 text-black">
            A peaceful place for real conversations and shared interests.
          </p>
        </div>
      </div>
    </div>
  );
}
