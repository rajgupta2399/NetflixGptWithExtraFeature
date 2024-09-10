import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageBaseURL, IMG_CDN_URL } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addWatchToLater } from "@/store/watchLaterSlice";
import toast from "react-hot-toast";

const MoviesDetails = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  const watchLaterMovies = useSelector((store) => store.watchLater.item);
  const getInfoFromLocalStorage = useSelector((store) => store.watchLater.item);
  // console.log(getInfoFromLocalStorage);
  const fetchDetail = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=cf71cac131e64006963c7567cf2c7e58&append_to_response=casts,videos,images,releases&language=en-US`
      );
      const res = await data.json();
      setMovieDetail(res);
    } catch (error) {
      console.error("Failed to fetch movie details:", error);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [movieId]);

  if (!movieDetail) return <p>Loading...</p>;

  const {
    original_title,
    backdrop_path,
    poster_path,
    release_date,
    runtime,
    vote_average,
    overview,
    videos,
  } = movieDetail;

  const filterTrailer = videos.results.filter(
    (video) => video.type === "Trailer"
  );
  const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];

  // 
  

  const handleToWatchLater = () => {
    const isAlreadyInWatchlist = watchLaterMovies.some(
      (movie) => movie.id === movieDetail.id
    );

    if (!isAlreadyInWatchlist) {
      dispatch(addWatchToLater(movieDetail));
      toast.success("Movie Added To WatchLater")
    } else {
      // console.log("Movie is already in the watchlist");
      toast.error("Movie Already Added")
    }
  };
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-[790px] bg-cover bg-center bg-no-repeat z-[-1] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[hsla(250,13%,11%,1)] after:to-[hsla(255,14%,11%,0.844)]">
        <img
          src={`${imageBaseURL}${backdrop_path || poster_path}`}
          alt={original_title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-20 py-24 relative z-10">
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex flex-col">
            <figure className="">
              <img
                src={`${IMG_CDN_URL}${poster_path}`}
                alt={original_title}
                className="w-[300px] rounded-xl object-cover"
              />
            </figure>
            <div className=" flex justify-center align-middle py-5">
              <button
                className=" border-2 border-green-600 py-3 px-10 rounded-xl bg-green-600 font-semibold"
                onClick={handleToWatchLater}
              >
                Add To WatchList
              </button>
            </div>
          </div>

          <div className="detail-box bg-gradient-to-t after:from-[hsla(250,13%,11%,1)] after:to-[hsla(255,14%,11%,0.844)] ">
            <div className="detail-content flex flex-col">
              <h1 className="text-4xl font-bold text-white mb-4">
                {original_title}
              </h1>

              <div className="meta-list flex items-center space-x-4 text-white">
                <div className="meta-item">
                  <span className="text-lg font-semibold">
                    {vote_average ? vote_average.toFixed(1) : "N/A"}
                  </span>
                </div>

                {runtime && <div className="separator">|</div>}

                <div className="meta-item">
                  {runtime ? `${runtime}m` : "N/A"}
                </div>

                {release_date && <div className="separator">|</div>}

                <div className="meta-item">
                  {release_date ? release_date.split("-")[0] : "N/A"}
                </div>
              </div>

              <p className="text-white mt-6 max-w-xl">{overview}</p>
            </div>
            <div className="mt-5">
              <h3 className="text-2xl font-semibold text-white">
                Trailers and Clips
              </h3>
              {/*
               Here you can add video clips/trailers if available*/}
              <div className="flex overflow-x-scroll scrollbar-hide">
                <div className=" w-[450px] h-[250px] mt-5">
                  <iframe
                    className=" w-full h-full"
                    src={
                      "https://www.youtube.com/embed/" +
                      trailer.key +
                      "?&autoplay=1&mute=1"
                    }
                    title="YouTube video player"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
