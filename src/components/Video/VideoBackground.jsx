import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "@/Hooks/useMovieTrailer ";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen mt-[-14vw] mb-8 sm:mt-[-18px] md:mt-[15px] lg:mt-[-75px] xl:mt-[-105px] 2xl:mt-[-185px]">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
