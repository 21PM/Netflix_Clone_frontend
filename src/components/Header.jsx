import React, { useEffect, useState } from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import axios from 'axios';
import { API_END_POINT } from '../utils/API';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../reduxrtk/userslice';
import toast from 'react-hot-toast';
import { getSearchMovie } from '../reduxrtk/movieslice';
import { getsearchedMovieResults } from '../reduxrtk/movieslice';

import { useNavigate } from 'react-router-dom';

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(store=>store.user.user)
    const IsSearch = useSelector(store=>store.movie.Search)
    
    const SearchedMoveData = useSelector(store=>store.movie.SearchedMoveData)

  const handleLogout = async(req,res) =>{

      try {
        const response = await axios.get(`${API_END_POINT}/logout`, {
            withCredentials: true // Ensure cookies are included with the request
        });

         if(response.status){
            dispatch(setUser(null))
            dispatch(getSearchMovie(false))
            dispatch()
            toast.success("You are sucessfully logged out")
         }
        
    } catch (error) {
        console.error('Error during logout:', error.response ? error.response.data : error.message);
    }
  }

  function SearchMoviefunc(){
        dispatch(getSearchMovie())
        dispatch(getsearchedMovieResults(null))
  } 
  function GotoHome(){
    dispatch(getSearchMovie(true))
    dispatch(getsearchedMovieResults(null))

  }

  return (
   <>
    <div className='flex w-[100%] absolute z-10 items-center justify-between bg-gradient-to-b from-black'>
        <img className='w-52 cursor-pointer hover:opacity-40'onClick={GotoHome} src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png' alt='logo'></img>

    {
        user && <div className='flex items-center'>
        <IoIosArrowDropdown size={24} className='text-white'/>
        <h1 className='text-lg text-white'>{user.fullName}</h1>
        <div className='ml-4 flex gap-3'>
    
        <button className='bg-red-800 text-white px-4 py-2 ml-2 hover:opacity-80 hover:bg-black hover:text-white hover:border-4 rounded-md' onClick={SearchMoviefunc}>{IsSearch ? "Home" : "Search Movies"}</button>
        <button className='bg-red-800 text-white px-4 py-2  mr-10 hover:opacity-80 hover:bg-black hover:text-white hover:border-4  rounded-md' onClick={handleLogout}>Logout</button>
        </div>
    </div>
    }
    </div>
   </>
  )
}

export default React.memo(Header)