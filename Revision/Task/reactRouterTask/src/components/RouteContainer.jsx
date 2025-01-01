import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import DashBoard from './DashBoard'
import Order from './Order'
import Product from './Products'
import Details from './Details'
import { fetchDetails } from './Details'
import Product1, { fetchData } from './Product1'
import Products from './Products'



function RouteContainer() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/shop",
          element:<Shop/>
        },
        {
          path:"/dashboard",
          element:<DashBoard/>,
          children:[
            {
              index:true,
              element:<Products/>,
              children:[
                {
                  path:"/product1",
                  element:<Product1/>,
                  loader:fetchData
                },
                {
                  path:':id',
                  element:<Details/>,
                  loader:fetchDetails
                }
              ]
            },
          ]
        }
      ]
    }
  ])
  return (
    <RouterProvider router={route}/>
  )
}

export default RouteContainer
