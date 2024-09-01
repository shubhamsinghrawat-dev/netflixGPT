import React from 'react';
import { IMG_CDN } from '../utils/constant';
import { Link } from 'react-router-dom';

const MovieCard = ({ posterPath, id, titleMovie }) => {
  if (!id) return null;
  return (
    <div className="flex-shrink-0 w-48 mr-4">
      <Link to={"/browse/" + id}>
        <img 
          src={IMG_CDN+posterPath} 
          alt={titleMovie} 
          className="w-full h-64 object-cover rounded-md shadow-lg"
        />
      </Link>
      <h2 className="text-md font-medium mt-2 text-center">{titleMovie}</h2>
    </div>
  );
};

export default MovieCard;
