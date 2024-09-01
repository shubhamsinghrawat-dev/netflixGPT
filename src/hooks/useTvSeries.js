import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTvSeries } from '../utils/moviesSlice';
import { api_options } from '../utils/constant';

const useTvSeries = () => {
    const dispatch = useDispatch();
  
    const getTvSeries = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', api_options
    );
    const json = await data.json();
    dispatch(addTvSeries(json.results))
    };

    useEffect(()=>{
        getTvSeries();
    }, [])
};

export default useTvSeries;