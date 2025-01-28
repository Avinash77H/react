import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Shop from './Shop'

function NewVersion() {
    const router = createBrowserRouter([
       {
        path:"/",
        element:<Navbar/>,
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
                path:"/shop",
                element:<Shop/>
            }
        ]
       }

    ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default NewVersion