import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './Login'
import Browse from './Browse'
import SearchMovie from './SearchMovie'

const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },
    {
      path:"/Search_Movie",
      element:<SearchMovie/>
    },
])
function Body() {
  return (
    <>
            <RouterProvider router={appRouter}/>

    </>    
)
}

export default Body