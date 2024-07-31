import React from 'react'

function VideoBackground() {
  return (
    <>
         <div className='w-[vw]'>
         <iframe className="aspect-video w-screen" src="https://www.youtube.com/embed/qQJJWhh-XRo?si=jEauAweTNTobyAZ9&autoplay=1&mute=1"
         title="YouTube video player" 
         frameBorder="0" 
         allowFullScreen></iframe>
         </div>
    </>
  )
}

export default VideoBackground