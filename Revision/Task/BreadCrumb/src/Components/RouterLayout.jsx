import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Navbar from './Navbar'
import Home from "../Pages/Home"
import About from "../Pages/About"
import Details from "../Pages/Details"
import Information1 from "../pages/Information1"
import Information2 from '../Pages/Information2'
import { fetchData } from '../pages/Information1'
import { fetchData2 } from '../Pages/Information2'

function RouterLayout() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"details",
          element:<Details/>,
          children:[
            {
              index:true,
              element:<Information1/>,
              loader:fetchData
            },
            {
              path:":id",
              element:<Information2/>,
              loader:fetchData2
            }
          ]
        }
      ]
    },

  ])

  return (
    <div>
      <RouterProvider router={route}/>
    </div>
  )
}

export default RouterLayout
