import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoTitle = ({ title, overview }) => {
  const id = useSelector((store) => store?.movies?.nowPlayingMovies[6]?.id);

  return (
    <div className="absolute bottom-1/4 left-4 md:left-12 w-[90%] md:w-max text-white z-10">
      <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
      <p className="text-base md:text-xl mt-2 md:mt-4 max-w-full md:max-w-lg overflow-hidden">{overview}</p>
      <div className="mt-4 md:mt-6 flex flex-col md:flex-row">
        <Link to={"/browse/" + id}>
          <button className="bg-white w-[100%] text-black px-4 py-2 md:px-6 overflow-hidden md:py-3 font-semibold rounded-lg mr-2 md:mr-4">Play</button>
        </Link>
        <Link to={"/browse/" + id}>
          <button className="w-[100%] md:mx-2 bg-gray-700 bg-opacity-50 text-white px-4 py-2 md:px-6 overflow-hidden md:py-3   font-semibold rounded-lg mt-2 md:mt-0">More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
