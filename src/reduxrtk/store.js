import {configureStore} from "@reduxjs/toolkit"
import { newuserreducer } from "./userslice";
import { MovieReducer } from "./movieslice";

const store = configureStore({
    reducer:{
        user:newuserreducer,
        movie:MovieReducer
    },
})


export default store;