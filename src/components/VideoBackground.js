import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    useMovieTrailer(movieId);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {trailerVideo?.key && (
                <iframe
                    className="absolute inset-0 w-full h-full object-cover"
                    src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo.key}`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="YouTube Video"
                ></iframe>
            )}
            <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
    );
}

export default VideoBackground;
