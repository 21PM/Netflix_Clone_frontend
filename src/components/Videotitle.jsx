import React from 'react'
import { IoPlay } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";



function Videotitle({title,overview}) {
  return (
        <>

            <div className="w-4/12 absolute mt-[-35%] pl-12">
                <span className='text-3xl font-bold text-white'>{title}</span>  
                <p className='text-white w-12/12'> {overview}</p>
                <div className='mt-6 flex max-w-max'>
                        <button className='px-4 flex items-center gap-2 py-2 bg-white text-black ml-2 rounded-lg hover:opacity-80 hover:bg-black hover:text-white border-4'><IoPlay/>  Play</button>
                        <button className='px-4 flex items-center gap-2 py-2 bg-white text-black ml-2 rounded-lg hover:opacity-80 hover:bg-black hover:text-white border-4'><FaInfoCircle/> Watch More</button>
                </div>
            </div>
        </>
  )
}

export default Videotitle