import { useEffect } from 'react';
import axios from 'axios';
import { api_options } from './../utils/constant';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, api_options);
            const json = response?.data;
            const filtertrailer = json?.results?.filter(video => video?.type === "Trailer");
            const trailer = filtertrailer?.length ? filtertrailer[0] : json?.results[0];
            // console.log(trailer);
            dispatch(addTrailerVideo(trailer));
        } catch (error) {
            console.error('Error fetching trailer:', error);
        }
    };

    useEffect(() => {
        if (movieId) {
            getMovieTrailer();
        }
    }, []);
}

export default useMovieTrailer;
