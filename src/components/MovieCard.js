import React from 'react';
import { IMG_CDN } from '../utils/constant';

const MovieCard = ({ posterPath, movie, titleMovie }) => {
  return (
    <div className="flex-shrink-0 w-48 mr-4">
      <img 
        src={IMG_CDN+posterPath} 
        alt={titleMovie} 
        className="w-full h-64 object-cover rounded-md shadow-lg"
      />
      <h2 className="text-md font-medium mt-2 text-center">{titleMovie}</h2>
    </div>
  );
};

export default MovieCard;
