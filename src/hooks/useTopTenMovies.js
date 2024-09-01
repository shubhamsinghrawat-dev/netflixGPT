import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTopTenMovies } from '../utils/moviesSlice';
import { api_options } from '../utils/constant';

const useTopTenMovies = () => {
    const dispatch = useDispatch();
  
    const getTopTenMovies = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', api_options
    );
    const json = await data.json();
    dispatch(addTopTenMovies(json.results))
    };

    useEffect(()=>{
    getTopTenMovies();
    }, [])
};

export default useTopTenMovies;