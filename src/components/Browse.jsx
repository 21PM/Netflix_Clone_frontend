import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import HeroContainer from './HeroContainer'
import MovieContainer from './MovieContainer'
import  {getNowPlayingMovies,getPoplularMovies,getTopRatedMovies,getUpcomingMovies} from '../reduxrtk/movieslice'
import { options } from '../utils/API'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { API_END_POINT } from '../utils/API'
import { setUser } from '../reduxrtk/userslice'
import axios from 'axios'

function Browse() {


  const IsSearch = useSelector(store=>store.movie.Search)
  const navigate = useNavigate()
  
  const user = useSelector(store=>store.user.user)

  // if(!user){
  //   navigate("/")
  // }

  const nowPlayingMovies = useSelector(store=>store.movie.nowPlayingMovies)
  const PopularMovies = useSelector(store=>store.movie.PopularMovies)
  const TopRatedMovies = useSelector(store=>store.movie.TopRatedMovies)
  const UpcomingMovies = useSelector(store=>store.movie.UpcomingMovies)
  const dispatch = useDispatch();


    useEffect(()=>{
      if(!user){
        navigate("/")
      }
      
  if(IsSearch){
    navigate("/Search_Movie")
  }
      const fetchMovies = async () => {
        try {
          const [nowPlayingRes, popularRes, topRatedRes, upcomingRes] = await Promise.all([
            axios.get("https://api.themoviedb.org/3/movie/now_playing", options),
            axios.get("https://api.themoviedb.org/3/movie/popular", options),
            axios.get("https://api.themoviedb.org/3/movie/top_rated", options),
            axios.get("https://api.themoviedb.org/3/movie/upcoming", options)
          ]);
    
          dispatch(getNowPlayingMovies(nowPlayingRes.data.results));
          dispatch(getPoplularMovies(popularRes.data.results));
          dispatch(getTopRatedMovies(topRatedRes.data.results));
          dispatch(getUpcomingMovies(upcomingRes.data.results));
        } catch (error) {
          console.error('Failed to fetch movies:', error);
        }
      };
      fetchMovies()
      console.log(IsSearch);
    },[IsSearch,user])


  return (
    <>
        <div className='max-w-full h-full desktop:w-full lg:w-full sm:w-full xs:w-full 2xs:w-full border-2 bg-black border-black'>
        <Header/>
        <div>
        <HeroContainer/>
        <MovieContainer/>

         
        </div>
        </div>
    </>
  )
}

export default Browse