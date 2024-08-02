import React from 'react'

function VideoBackground({trailerKey}) {

  return (
    <>
         <div className='w-[vw] h-screen'>
<iframe className="aspect-video w-full" src={`https://www.youtube.com/embed/${trailerKey}?si=1BukZWSxs_etahZ8&autoplay=1&mute=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
    </>
  )
}

export default VideoBackground