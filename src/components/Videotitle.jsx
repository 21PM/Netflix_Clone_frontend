import React from 'react'
import { IoPlay } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";



function Videotitle() {
  return (
        <>
            <div className="w-screen aspect-video aabsolute mt-[-38%] pl-12">
                <h1 className='text-3xl font-bold text-white'>Patel MernStack</h1>  
                <p className='text-white'> Video contentpalf asd andn there are manfi adsdlfnsasfdsnsfmdsm sdKNJN  dsfj</p>
                <div className='mt-6 flex'>
                        <button className='px-4 flex items-center gap-2 py-2 bg-white text-black ml-2 rounded-lg hover:opacity-80 hover:bg-black hover:text-white border-4'><IoPlay/>  Play</button>
                        <button className='px-4 flex items-center gap-2 py-2 bg-white text-black ml-2 rounded-lg hover:opacity-80 hover:bg-black hover:text-white border-4'><FaInfoCircle/> Watch More</button>
                </div>
            </div>
        </>
  )
}

export default Videotitle