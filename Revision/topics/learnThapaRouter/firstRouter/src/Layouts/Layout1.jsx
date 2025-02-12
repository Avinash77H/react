import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from '../Components/AppLayout'
import Home from '../Components/Home'
import About from '../Components/About'
import ContactUs from '../Components/ContactUs'
import ErrorElement from '../Components/ErrorElement'
import Movies from '../Components/Movies'
import GetMovieData from '../Components/GetMovieData'
import MovieDetails from '../Components/MovieDetails'
import GetMovieDataDetails from '../Components/GetMovieDataDetails'

function Layout1() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorElement/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/movies",
          element:<Movies/>,
          loader:GetMovieData,
        },
        {
          path:"/movies/:id",
          element:<MovieDetails/>,
          loader:GetMovieDataDetails
        },
        {
          path:"/contactus",
          element:<ContactUs/>
        },
        
      ]
    }
  ])
  
  return (
   <>
    <RouterProvider router={route}/>
   </>
  )
}

export default Layout1
