import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useSelector } from 'react-redux';
import { SetOpen } from '../reduxrtk/movieslice';
import { useDispatch } from 'react-redux';
import VideoBackground from './VideoBackground';
import { useEffect } from 'react';
import { useState } from 'react';
import { options } from '../utils/API';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 function FullScreenDialog() {

  const [trailerKey,SettrailerKey] = useState("")

  const open = useSelector(store=>store.movie.openDialoge)
  const MovieID = useSelector(store=>store.movie.selectedMovieId)
  
  const dispatch = useDispatch();
  
  const handleClickOpen = () => {
    dispatch(SetOpen(true))
  };

  const handleClose = () => {
    dispatch(SetOpen(false))
  };

  useEffect(()=>{
    console.log("newID",MovieID);
    if(!MovieID){
      return
    }

   
      const getNewTrailer = async () => {
        try {
          const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${MovieID}/videos`,
            options
          );
          const trailers = res?.data?.results?.filter(
            (ele) => (ele.type === 'Trailer' || ele.type === 'Teaser') && ele.key !== '');
          // console.log(trailers[0].key);
  
          SettrailerKey(trailers[0].key)
  
        } catch (error) {
          console.error('Error fetching trailer:', error);
        }
      };
  
      getNewTrailer();
    

  },[MovieID])

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar className='bg-black opacity-80'>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              {/* <CloseIcon /> */}
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Movie Trailer
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>

        <div className='min-w-full min-h-[vw] bg-black'>
            <iframe className="aspect-video w-full" src={`https://www.youtube.com/embed/${trailerKey}?si=a_DeEC3XX0GH5UtE&autoplay=1&mute=0`}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>



      </Dialog>
    </React.Fragment>
  );
}



export default FullScreenDialog;