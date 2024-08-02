import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getsearchedMovieResults } from '../reduxrtk/movieslice'
import { options } from '../utils/API'
import MovieList from './MovieList'
import Moviecard from './Moviecard'
import { SetOpen,getSelectedMovieId } from '../reduxrtk/movieslice'


function SearchMovie() {

    const [SearchValue,SetSearchValue] = useState("")
    const [isLoading,SetiSloading] = useState(false)
    const IsSearch = useSelector(store=>store.movie.Search)
    const user = useSelector(store=>store.user.user)
    const SearchedMoveData = useSelector(store=>store.movie.SearchedMoveData)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
    useEffect(()=>{
        if(!user){
            navigate("/")
          }
        if(!IsSearch){
            navigate("/browse")
        }
    },[IsSearch,user])

   const searchMovie = async ()=>{
             SetiSloading(true)
            try{
                const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${SearchValue}&include_adult=false&language=en-US&page=1`,options);
               const searchedMovieData = res?.data?.results
                dispatch(getsearchedMovieResults(searchedMovieData));
            }catch(e){
                console.log(e);

            }finally{
                SetiSloading(false) 
            }
    }

    const ShowTrailer= (id)=>{
        console.log(id);
        dispatch(getSelectedMovieId(id))
        dispatch(SetOpen(true))
    }

  return (
        <>
            <div className='min-h-screen pb-10 bg-blue bg-cover bg-center' style={{
        backgroundImage: "url('https://www.the-sun.com/wp-content/uploads/sites/6/2024/07/esc-netflix-off-platform-copy.jpg?strip=all&quality=100&w=1920&h=1080&crop=1)"
      }}>
            <Header/>
            <div className='flex justify-center gap-4 pt-[10%] '>
            <input type='text' placeholder='Search Movies...' className='border-2 border-black w-3/12 px-4 rounded-lg'onChange={(e)=>SetSearchValue(e.target.value)}></input>
            <button className='bg-red-700 py-3 px-4 font-bold text-white hover:opacity-80 hover:bg-transparent hover:text-white hover:border-4  rounded-md' onClick={searchMovie}>Search</button> 
            </div>
            {
                isLoading && <p className='text-white w-full flex
                items-center justify-center mt-5 text-3xl'>Loading...</p>
            }
            {
             SearchedMoveData?.length === 0 && <p className='text-white w-full flex
                items-center justify-center mt-5 text-3xl'  >No Results Found</p>   
            }
            {
                
                SearchedMoveData && <div className='w-full h-full bg-transparent flex flex-wrap gap-8 items-center justify-center mt-10'>
                
                     {
                        SearchedMoveData.map((ele)=>{
                    
                            const url = ele.backdrop_path
                            ? `https://image.tmdb.org/t/p/w500/${ele.backdrop_path}`
                            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vdTM9zAwG44NpHuvF2Ib18axAs2gLjIxmg&s';
                            
                            return(
                                <>
                                <div onClick={()=>ShowTrailer(ele.id)}>
                                <Moviecard  posterUrl={`${url}`} name={ele.original_title}/>
                                </div>
                                </>
                            )
                        })
                     }   

            </div>  
            }
            
            </div>
        </>
        
  )
}

export default SearchMovie