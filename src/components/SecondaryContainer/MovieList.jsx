import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-xl py-4 text-white font-semibold">
        {title}
      </h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex mb-5">
          {movies?.map((movie) => (
            <Link key={movie.id} to={"/MovieDetail/" + movie.id}>
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
