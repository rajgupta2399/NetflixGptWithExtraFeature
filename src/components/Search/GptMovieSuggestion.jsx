import React from "react";
import MovieCard from "../SecondaryContainer/MovieCard";
import { Link } from "react-router-dom";

const GptMovieSuggestion = ({ movieResult }) => {
  console.log(movieResult);

  return (
    <div>
      {movieResult ? (
        <>
          <div className="flex gap-8 flex-wrap flex-row justify-center mb-5 mt-10">
            {movieResult?.map((movie) => (
              <Link key={movie.id} to={"/MovieDetail/" + movie.id}>
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center align-middle">
            <h1 className=" bg-red-600 py-3 px-10 ">Search Some Movies</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default GptMovieSuggestion;
