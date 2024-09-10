import { API_OPTIONS } from "@/components/Utils/Constant";
import { addArrivingToday } from "@/store/tvShowsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useArrivingToday = () => {
  const dispatch = useDispatch();
  const arrivingToday = useSelector((store) => store.shows.arrivingToday);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addArrivingToday(json.results.splice(0, 18)));
  };
  useEffect(() => {
    !arrivingToday && getTopRatedMovies();
  }, []);
};

export default useArrivingToday;
