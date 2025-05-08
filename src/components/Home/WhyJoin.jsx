export default function WhyJoin() {
  return (
    <>
      <div className="bg-white min-h-120 flex flex-col md:flex-row relative z-[-1] justify-center items-center">
        <div className="flex flex-col gap-4 md:w-140">
          {/* text for who we are */}
          <div className="flex px-4 md:pl-40 flex-col text-left mt-8 md:mt-40">
            <p className="font-semibold text-blue-500">Who We are</p>
            <p className="font-semibold text-2xl text-black">
              We are a growing social media community!
            </p>
            <p className="font-serif mt-3 text-gray-600">
              Echo-Chamber. is a social platform for real, non-political
              conversations. We focus on shared interests, respectful dialogue,
              and a healthier online community.
            </p>
          </div>

          {/* text for what we do */}

          <div className="flex  px-4 md:pl-40 flex-col text-left">
            <p className="font-semibold text-blue-500">What we do</p>
            <p className="font-semibold text-2xl text-black">
              We are Building relations that last.
            </p>
            <p className="font-serif mt-3 text-gray-600">
              We provide a space for users to share ideas, connect over
              interests, and engage in meaningful, non-toxic
              conversations—without the distractions of politics or drama.
            </p>
          </div>
        </div>
        <div className="mt-30 px-10">
          <img src="/flower.png" alt="" className="w-120" />
        </div>
      </div>
    </>
  );
}
