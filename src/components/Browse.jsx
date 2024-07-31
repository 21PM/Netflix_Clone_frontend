import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import HeroContainer from './HeroContainer'
import MovieContainer from './MovieContainer'
import { getNowPlayingMovies } from '../reduxrtk/movieslice'
import { options } from '../utils/API'
import { useDispatch } from 'react-redux'
import axios from 'axios'

function Browse() {

  const user = useSelector(store=>store.user.user)
  const movie = useSelector(store=>store.movie.nowPlayingMovie)
  const dispatch = useDispatch();

    useEffect(()=>{
      nowPlayingMovieAPI()
    },[])

      const nowPlayingMovieAPI = async()=>{
        const res = await axios.get("https://api.themoviedb.org/3/movie/now_playing",options)
        dispatch(getNowPlayingMovies(res.data.results))
      }



  return (
    <>
        <div>
        <Header/>
        <div>
        <HeroContainer/>
        {/* <MovieContainer/> */}

         
        </div>
        </div>
    </>
  )
}

export default Browse