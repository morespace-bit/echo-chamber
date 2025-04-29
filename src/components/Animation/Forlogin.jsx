import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Forlogin() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/feed");
    }, 3000);
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center w-screen">
      <div>
        <p className="text-3xl">
          welcome to Echo-Chamber a place to share peace and vibes
        </p>
      </div>
    </div>
  );
}

export default Forlogin;
