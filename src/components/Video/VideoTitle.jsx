import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="aspect-video pt-[20%] px-6 md:px-10 absolute text-white sm:bg-gradient-to-r from-black md:bg-gradient-to-r">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="my-4 md:m-0">
        
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
