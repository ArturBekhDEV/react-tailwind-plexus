import React from "react";
import plexusVideo from "../assets/video_3.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={plexusVideo}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white text-2xl text-center  ">
        <h1 className="py-1">Absolute Data Flow.</h1>
        <h1>
          <span className="blue">Network</span> Trading Protocol{" "}
        </h1>
        <p className="py-3">
          Garanteed trading for millions users and top Ethereum applications.
        </p>
        <div>
          <button className="m-2 bg-sky-800">View More</button>
          <button className="m-2 bg-sky-800">Contact us</button>
        </div>
        <div>
          <p className="text-white text-center m-10 font-bold">
            Total amount of earn: 32,403,16,22$
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
