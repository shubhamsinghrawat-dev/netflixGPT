import openai from './../utils/openai';
import React, { useRef } from 'react';
import { lang } from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import { api_options } from "./../utils/constant"
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();

    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1", api_options
        );
        const json = await data.json();
        console.log(json)
    
        return json.results;
      };

      const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        // Make an API call to GPT API and get Movie Results
    
        const gptQuery =
          "Act as a Movie Recommendation system and suggest some movies for the query : " +
          searchText.current.value +
          ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: "user", content: gptQuery }],
          model: "gpt-3.5-turbo",
        });
    
        if (!gptResults.choices) {
          // TODO: Write Error Handling
        }
    
        console.log(gptResults.choices?.[0]?.message?.content);
    
        // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    
        // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]
    
        // For each movie I will search TMDB API
    
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        // [Promise, Promise, Promise, Promise, Promise]
    
        const tmdbResults = await Promise.all(promiseArray);
    
        console.log(tmdbResults);
    
        dispatch(
          addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
        );
      };

    return (
        <div className="w-full flex justify-center my-4">
            <form
                className="flex w-full max-w-3xl"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="text"
                    ref={searchText}
                    placeholder={lang[langKey]?.GptSearchPlaceholder}
                    className="flex-grow p-3 text-white bg-black border border-red-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
                <button
                    type="submit"
                    onClick={handleGptSearchClick}
                    className="p-3 px-6 bg-red-500 hover:bg-red-600 text-white rounded-r-md"
                >
                    {lang[langKey]?.Search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
