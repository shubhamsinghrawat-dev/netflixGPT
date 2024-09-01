import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoTitle = ({ title, overview }) => {
  const id = useSelector((store) => store?.movies?.nowPlayingMovies[6]?.id);

  return (
    <div className="absolute bottom-1/4 left-4 md:left-12 w-full md:w-auto text-white z-10">
      <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
      <p className="overflow-hidden text-sm md:text-xl mt-2 md:mt-4 max-w-[70%] md:max-w-lg">{overview}</p>
      <div className="mt-4 md:mt-6">
        <Link to={"/browse/" + id}>
        <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 font-semibold rounded-lg mr-2 md:mr-4 overflow-hidden text-ellipsis whitespace-nowrap">Play</button>
        </Link>
        <button className="bg-gray-700 bg-opacity-50 text-white px-4 py-2 md:px-6 md:py-3 font-semibold rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
