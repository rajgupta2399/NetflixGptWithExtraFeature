import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import lang from "../Utils/languageConstant";
import openai from "../Utils/OpenAI";
import { API_OPTIONS } from "../Utils/Constant";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchBar = () => {
  const [movieResult, setMovieResult] = useState([]);
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const searchMovieTMDB = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          searchText.current.value +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const json = await response.json();
      const movies = json.results;
      setMovieResult(movies);
      return movies;
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return [];
    }
  };

  // Function to handle GPT-based search or custom search logic
  const handleGptSearch = async () => {
    const movies = await searchMovieTMDB();
    // console.log(movies);
    // console.log(searchText.current.value);
    // // make an api call to get the movie result
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);
  };

  // console.log(movieResult);

  return (
    <div>
      <form
        action=""
        className="flex justify-center align-middle"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-3 m-4 w-1/2"
        />
        <button
          className="font-semibold text-white bg-red-600 border-red-600 px-4 rounded-md w-[150px] h-[50px] mt-4"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
      <GptMovieSuggestion movieResult={movieResult} />
    </div>
  );
};

export default GptSearchBar;
