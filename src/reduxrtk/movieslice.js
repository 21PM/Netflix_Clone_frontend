import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovie:null,
        TrendigMovie:[],
    },
    reducers:{
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovie = action.payload
        },

    }
})


export const {getNowPlayingMovies} = movieSlice.actions;
export const MovieReducer = movieSlice.reducer;