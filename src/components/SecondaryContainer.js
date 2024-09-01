import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black text-white py-10">
      {movies.nowPlayingMovies && (
        <>
          <MovieList title="New on Netflix" movies={movies?.nowPlayingMovies} />
          <MovieList title="Top 10 Movies in India Today" movies={movies?.TopTenMovies} />
          <MovieList title="Upcoming" movies={movies?.UpcomingMovies} />
          <MovieList title="TV Dramas" movies={movies?.TvSeries} />
        </>
      )}
    </div>
  );
};

export default SecondaryContainer;