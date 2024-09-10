import { API_OPTIONS } from "@/components/Utils/Constant";
import { addOnTheAir } from "@/store/tvShowsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useOnTheAir = () => {
  const dispatch = useDispatch();
  const onTheAir = useSelector((store) => store.shows.onTheAir);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addOnTheAir(json.results.splice(0,18)));
  };
  useEffect(() => {
    !onTheAir && getTopRatedMovies();
  }, []);
};

export default useOnTheAir;
