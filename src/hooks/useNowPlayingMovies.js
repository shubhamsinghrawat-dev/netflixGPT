import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { api_options } from '../utils/constant';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
  
    const getNowPlayingMovies = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US', api_options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
    };

    useEffect(()=>{
    getNowPlayingMovies();
    }, [])
};

export default useNowPlayingMovies;