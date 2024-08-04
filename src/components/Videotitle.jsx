import React from 'react'
import { IoPlay } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";



function Videotitle({title,overview}) {
  return (
    <>
    <div
      className="
        absolute w-4/12 
        2xl:block 
        desktop:block 
        xl:block 
        lg:block 
        2xl:mt-[-41%] 
        desktop:mt-[-38%] 
        xl:mt-[-37%] 
        lg:mt-[-39%] 
        md:hidden 
        sm:hidden 
        xs:hidden 
        lg:w-6/12
        desktop:w-4/12
        2xl:w-4/12
        xl:w-6/12
        pl-12 
      "
    >
      <span className="text-3xl font-bold text-white">{title}</span>
      <p className="text-white w-full">{overview}</p>
      <div className="mt-6 flex max-w-max gap-2">
        <button
          className="
            px-4 py-2 
            bg-white 
            text-black 
            rounded-lg 
            hover:opacity-80 
            hover:bg-black 
            hover:text-white 
            border-4
            flex
            items-center
            gap-2
          "
        >
          <IoPlay /> Play
        </button>
        <button
          className="
            px-4 py-2 
            bg-white 
            text-black 
            rounded-lg 
            hover:opacity-80 
            hover:bg-black 
            hover:text-white 
            border-4
             flex
            items-center
            gap-2
          "
        >
          <FaInfoCircle /> Watch More
        </button>
      </div>
    </div>
  </>
  
  )
}

export default Videotitle