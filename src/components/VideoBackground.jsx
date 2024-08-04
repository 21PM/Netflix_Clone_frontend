import React from 'react'

function VideoBackground({trailerKey}) {

  return (
    <>
         <div className='w:full desktop:w-full lg:w-full sm:w-full xs:w-full 2xs:w-full 3xs:w-full'>
<iframe className="aspect-video w-full sm:mt-10 xs:mt-20 2xs:mt-20 3xs:mt-20" src={`https://www.youtube.com/embed/${trailerKey}?si=1BukZWSxs_etahZ8&autoplay=1&mute=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
    </>
  )
}

export default VideoBackground