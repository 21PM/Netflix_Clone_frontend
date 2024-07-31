import React, { useState } from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import axios from 'axios';
import { API_END_POINT } from '../utils/API';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../reduxrtk/userslice';
import toast from 'react-hot-toast';

function Header() {

    const dispatch = useDispatch()
    const user = useSelector(store=>store.user.user)

  const handleLogout = async(req,res) =>{

      try {
        const response = await axios.get(`${API_END_POINT}/logout`, {
            withCredentials: true // Ensure cookies are included with the request
        });

         if(response.status){
            toast.success("You are sucessfully logged out")
            dispatch(setUser(null))
         }
        
    } catch (error) {
        console.error('Error during logout:', error.response ? error.response.data : error.message);
    }
  }


  return (
   <>
    <div className='flex w-[100%] absolute z-10 px-6 items-center justify-between bg-gradient-to-b from-black'>
        <img className='w-56' src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png' alt='logo'></img>

    {
        user &&         <div className='flex items-center'>
        <IoIosArrowDropdown size={24} className='text-white'/>
        <h1 className='text-lg text-white'>{user.fullName}</h1>
        <div className='ml-4'>
        
        <button className='bg-red-800 text-white px-4 py-2' onClick={handleLogout}>Logout</button>
        <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movies</button>
        </div>
    </div>
    }
    </div>
   </>
  )
}

export default Header