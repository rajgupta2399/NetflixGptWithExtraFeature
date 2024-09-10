import { API_OPTIONS } from "@/components/Utils/Constant";
import { addNowPlayingMovies } from "@/store/movieSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const fetchMovie = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    !nowPlayingMovies && fetchMovie();
  }, []);
};

export default useNowPlayingMovies;
