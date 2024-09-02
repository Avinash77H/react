import React from 'react'
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import Shop from './shop'
import Navbar from '../components/Navbar'



const List=createBrowserRouter([
    {
        path:'/',
        element:<Navbar/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'shop',
                element:<Shop/>
            },
            {
                path:'about',
                element:<About/>
            }

        ]
    }
])

function Layout2() {
  return (
    <div>
      <RouterProvider router={List}></RouterProvider>
    </div>
  )
}

export default Layout2
