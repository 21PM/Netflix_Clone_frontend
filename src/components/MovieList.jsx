import React from 'react'
import Moviecard from './Moviecard'
import { SetOpen,getSelectedMovieId } from '../reduxrtk/movieslice'
import { useDispatch } from 'react-redux'
function MovieList({title,movies}) {

  const dispatch = useDispatch()

  function handleFullMovieScreen(id){
    dispatch(getSelectedMovieId(id))
    dispatch(SetOpen(true))
  }

  return (
    <div className='bg-black'>
        <h1 className='text-white ml-4 mb-2 text-3xl'>{title}</h1>
        <div className='flex no-scrollbar overflow-x-auto cursor-pointer'>
            <div className='flex items-center gap-4 bg-black px-4'>
                {
                  movies?.map((ele)=>{
                    return(
                      <div onClick={()=>handleFullMovieScreen(ele.id)}>
                      <Moviecard key={ele.id} name ={ele.original_title} posterUrl = {`https://image.tmdb.org/t/p/w500/${ele.backdrop_path}`} />
                      </div>
                    )
                  })
                }
             
            </div>
        </div>
    </div>
    
  )
}

export default MovieList