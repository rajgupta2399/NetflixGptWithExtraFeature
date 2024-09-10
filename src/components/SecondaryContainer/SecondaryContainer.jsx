import usePopularMovies from "@/Hooks/usePopularMovies";
import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useTopRatedMovies from "@/Hooks/useTopRatedMovies";
import useUpComing from "@/Hooks/useUpComing";

const SecondaryContainer = () => {
  useUpComing();
  useTopRatedMovies();
  usePopularMovies();
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative sm:z-20 md:z-20 lg:z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
