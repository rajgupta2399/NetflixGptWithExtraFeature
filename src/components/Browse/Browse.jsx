import React from "react";
import useNowPlayingMovies from "@/Hooks/useNowPlayingMovies";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondaryContainer/SecondaryContainer";
// import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  // const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className=" overflow-hidden">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
