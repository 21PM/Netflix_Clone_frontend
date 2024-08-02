import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        TopRatedMovies:null,
        UpcomingMovies:null,
        Search:false,
        SearchedMoveData:null,
        openDialoge:false,
        selectedMovieId:"",
    },
    reducers:{
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        getPoplularMovies:(state,action)=>{
            state.PopularMovies = action.payload
        },
        getTopRatedMovies:(state,action)=>{
            state.TopRatedMovies = action.payload
        },
        getUpcomingMovies:(state,action)=>{
            state.UpcomingMovies = action.payload
        },
        getSearchMovie:(state)=>{
            state.Search = !state.Search;
        },
        getsearchedMovieResults:(state,action)=>{
            state.SearchedMoveData = action.payload;
        },
        SetOpen :(state,action)=>{
            state.openDialoge = action.payload;
        },
        getSelectedMovieId:(state,action)=>{
            state.selectedMovieId = action.payload;
        }
    }
})


export const {getNowPlayingMovies,getPoplularMovies,getTopRatedMovies,getUpcomingMovies,getSearchMovie,getsearchedMovieResults,SetOpen,getSelectedMovieId} = movieSlice.actions;
export const MovieReducer = movieSlice.reducer;