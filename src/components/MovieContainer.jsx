import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


function MovieContainer() {

  const allmovies = useSelector(store=>store.movie)

  

  return (
    <>
      <div className='
  desktop:-mt-[15%] 
  lg:-mt-[10%] 
  xl:-mt-[10%]
  2xl:-mt-[18%]
  mt-0 
  pb-5 
  bg-black 
  relative 
  z-10 
  flex 
  flex-col 
  gap-5 
  font-bold

'>MovieContainer
        <MovieList title={"Now Playing Movies"} movies={allmovies.nowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={allmovies.PopularMovies} />
        <MovieList title={"Top Rated Movies"} movies={allmovies.TopRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies={allmovies.UpcomingMovies}/>
      </div>
    </>
  )
}

export default MovieContainer