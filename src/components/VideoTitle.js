import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-1/4 left-12 w-max text-white z-10">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl mt-4 max-w-lg">{overview}</p>
      <div className="mt-6">
        <button className="bg-white text-black px-6 py-3 font-semibold rounded-lg mr-4">Play</button>
        <button className="bg-gray-700 bg-opacity-50 text-white px-6 py-3 font-semibold rounded-lg">More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
