import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../Utils/Constant";
import { removeWatchLater } from "@/store/watchLaterSlice";
import { Link } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";

const Wishlist = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.watchLater.item);
  const handlerRemoveWatchLater = (item) => {
    // console.log(item);
    dispatch(removeWatchLater(item.id));
  };
  return movies.length === 0 ? (
    <div className="relative flex justify-center align-middle">
      <div className="absolute top-32">
        <Link to={"/browse"}>
          <button className=" bg-red-600 border-2 border-red-600 px-10 py-3 font-semibold rounded-2xl">
            Add Some Movies
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="relative">
      <div className="py-20 px-20 flex gap-8 flex-wrap flex-row justify-center mb-5 absolute mt-10">
        {movies.map((item, index) => (
          <div
            className="w-36 md:w-56 pr-4 flex flex-col relative"
            key={item.id}
          >
            <Link key={item.id} to={"/MovieDetail/" + item.id}>
              <img
                alt="Movie Card"
                className=" rounded-md cursor-pointer"
                src={IMG_CDN_URL + item.poster_path}
              />
            </Link>
            <div className=" absolute bottom-0 right-[15px]">
              <button
                className="py-2 px-4 rounded-sm font-semibold bg-red-600 absolute bottom-0 right-0"
                onClick={() => handlerRemoveWatchLater(item)}
              >
                <i className="fa-solid fa-trash text-white"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
