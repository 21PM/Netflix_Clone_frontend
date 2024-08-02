import React from 'react'

function Moviecard({posterUrl,name}) {
  return (
      <>
<div className='w-52 h-72 relative '>
  <img className='h-full object-cover rounded-lg shadow-lg' src={posterUrl} alt="Movie Poster" />
  <div className='absolute inset-0 rounded-lg shadow-lg shadow-red-500 flex flex-nowrap cursor-pointer'>
    <p className='absolute bottom-0 left-0 w-full p-2 text-red-800 bg-black bg-opacity-85 text-2xl font-semibold'>
      {name}
    </p>
  </div>
</div>
      </>
  ) 
}

export default Moviecard