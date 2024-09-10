import { API_OPTIONS } from "@/components/Utils/Constant";
import { addUpComingMovies } from "@/store/movieSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useUpComing = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    !upComingMovies && getTopRatedMovies();
  }, []);
};

export default useUpComing;
