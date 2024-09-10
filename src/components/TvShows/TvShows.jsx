import useArrivingToday from "@/Hooks/useArrivingToday";
import React from "react";
import { useSelector } from "react-redux";
import ShowsList from "./showsList";
import useOnTheAir from "@/Hooks/useOnTheAir";

const TvShows = () => {
  useArrivingToday();
  useOnTheAir();
  const shows = useSelector((store) => store.shows);
  return (
    shows.arrivingToday && (
      <div className="bg-black relative">
        <div className=" mt-[90px] pl-4 md:pl-12z-20 absolute">
          <ShowsList title={"Arriving Today"} movies={shows.arrivingToday} />
          <ShowsList title={"On The Air"} movies={shows.onTheAir} />
        </div>
      </div>
    )
  );
};

export default TvShows;
