import MainHeader from './MainHeader'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Footer from './Footer';
import useTopTenMovies from '../hooks/useTopTenMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTvSeries from './../hooks/useTvSeries';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {   
  useNowPlayingMovies();
  useTopTenMovies();
  useUpcomingMovies();
  useTvSeries();
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)

  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <div className='flex-grow'>
          {
          showGptSearch ? ( <GptSearch /> ) : 
          (
          <>
            <MainContainer /> 
            {/*  <SecondaryContainer /> */}
          </>
          )
        }
      </div>
      <Footer />
    </div>
  )
}

export default Browse
