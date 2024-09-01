import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[6]; 

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative">
        <VideoBackground movieId={id} />
        <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
