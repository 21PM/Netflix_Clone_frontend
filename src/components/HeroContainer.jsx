import React, { useEffect, useState } from 'react'
import VideoBackground from './VideoBackground'
import Videotitle from './Videotitle'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { options } from '../utils/API'


function HeroContainer() {

  const [trailerdetails, setTrailer] = useState({
    title:null,
    overview:null,
    trailerKey:null,
  });
  const movie = useSelector((store) => store.movie?.nowPlayingMovies);

  useEffect(() => {
    if (!movie || movie.length === 0) {
      return;
    }

    const randomMovieID = Math.floor(Math.random() * movie.length);
    const selectedMovie = movie[randomMovieID];
    console.log(selectedMovie);

    const getNewTrailer = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos`,
          options
        );
        const trailers = res?.data?.results?.filter(
          (ele) => (ele.type === 'Trailer' || ele.type === 'Teaser') && ele.key !== '');
        // console.log(trailers[0].key);
        let newObj = {
          title:selectedMovie.original_title,
          overview:selectedMovie.overview,
          trailerKey:trailers[0].key
        }

        setTrailer(newObj)

      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    getNewTrailer();

  }, [movie]);

  if (!movie || movie.length === 0) {
    console.log("1");
    return null;
  }

  const {title,overview,trailerKey} = trailerdetails;

  return (
    <div>
        <VideoBackground  trailerKey={trailerKey} />
        <Videotitle title={title} overview={overview}  />
    </div>
  )
}

export default React.memo(HeroContainer)