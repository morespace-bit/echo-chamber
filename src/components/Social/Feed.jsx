import { useState, useEffect } from "react";

export default function Feed() {
  const access = "NwOv9pWQXKBglEwy86f3MuovcXmg6_I9j3eREpqFf5U";
  const [img, setImg] = useState([]);
  async function get() {
    const res = await fetch(
      `https://api.unsplash.com/photos/?client_id=${access}`
    );
    const data = await res.json();
    setImg(data);
    console.log(data);
  }

  useEffect(() => {
    get();
  }, []);

  console.log(img);
  return (
    <>
      {/* main container */}
      <div className="flex w-full md:justify-between items-center justify-center min-h-screen bg-gray-200 overflow-x-hidden overflow-y-hidden">
        {/* left part */}
        <div className="hidden md:block absolute">
          <h1>Lefts</h1>
        </div>

        {/* center part */}
        {/* card container */}
        <div className="w-full text-center p-6 flex justify-center items-center flex-col">
          {img.map((i) => {
            return (
              <div
                key={i.id}
                className="flex p-6 bg-white mb-5 rounded-xl shadow-xl max-h-180 max-w-150 flex-col"
              >
                {/* profie and date uploaded */}
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={i.user.profile_image.large}
                    alt=""
                    className="w-10 object-cover rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="tracking-widest">{i.user.first_name}</p>
                    <p className="text-xs">4 hours ago</p>
                  </div>
                </div>
                {/* description */}
                <div className="flex">
                  <p className="left">{i.description}</p>
                </div>
                <div className="mx-h-140 overflow-hidden rounded-xl">
                  <img
                    src={i.urls.regular}
                    alt=""
                    className="rounded-xl w-full "
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* right part */}
        <div className="hidden md:block">
          <h1>Right</h1>
        </div>
      </div>
    </>
  );
}
