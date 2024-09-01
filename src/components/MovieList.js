import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className="pl-12 mt-12 mb-12">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
          {movies?.map((movie) => (
            <MovieCard 
              key={movie?.id} 
              id={movie?.id}
              posterPath={movie?.poster_path} 
              titleMovie={movie?.original_title} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
