export default function Footer() {
  // class contaier
  return (
    <div className="mt-105 h-100 bg-blue-300 flex rounded-t-2xl">
      {/* the noise image */}
      <div className="py-5 px-2 overflow-hidden w-full  relative">
        <div className="w-100 h-80 overflow-hidden rounded-2xl">
          <img src="/noisebg.jpg" alt="" className=" object-cover" />
        </div>
        <p className="absolute z-10 text-2xl left-8 bottom-30 w-85 font-extrabold font-serif">
          Help us build a better online space. Your support empowers real
          conversations, meaningful connections, and a more peaceful digital
          future—one interaction at a time.
        </p>
      </div>
    </div>
  );
}
