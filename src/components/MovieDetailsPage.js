import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { api_options, IMG_CDN } from "../utils/constant";
import MainHeader from './MainHeader';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const [movies, setMovies] = useState(null);
  const [video, setVideo] = useState(null);
  useEffect(() => {
    fetchMovies();
    fetchMovieVideo();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
        api_options
      );
      const json = await data.json();
      console.log(json);
      setMovies(json);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieVideo = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
          api_options
      );
      const json = await data.json();
      console.log(json);

      const filterData = json.results.filter(
        (video) =>
          video.type === "Trailer" ||
          video.type === "Official Trailer" ||
          video.type === "Teaser" ||
          video.type === "Featurette" ||
          video.type.toLowerCase().includes("trailer")
      );

      console.log(filterData);

      setVideo(json.results[0]);
      // setVideo(filterData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <MainHeader />
      <div className='relative h-screen w-full overflow-hidden'>
        <iframe
          className='top-0 left-0 w-full h-full'
          src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&mute=1`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
      <div className=' py-4 w-full h-full bg-gradient-to-r from-black via-transparent to-black'>
        <div className='absolute top-[25%] md:top-[35%] left-4 md:left-8 text-white max-w-4xl'>
          <h1 className='text-4xl md:text-6xl font-bold'>{movies?.title}</h1>
          <p className='mt-2 text-sm md:text-base w-full md:w-3/4'>{movies?.overview}</p>
          <div className='flex flex-wrap gap-2 mt-4'>
            {movies?.genres?.map((genre) => (
              <p
                key={genre?.id}
                className='rounded-full px-4 py-2 bg-brand-charcoal text-white text-xs md:text-sm'
              >
                {genre?.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer /> 
    </>
  );
};

export default MovieDetailsPage;