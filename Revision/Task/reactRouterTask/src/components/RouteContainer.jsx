import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import DashBoard from './DashBoard'
import Order from './Order'
import Products, { fetchData } from './Products'
import Details from './Details'
import { fetchDetails } from './Details'


function RouteContainer() {
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
              path:"/dashboard/orders",
              element:<Order/>
            },
            {
              path:"/dashboard/products",
              element:<Products/>,
              loader:fetchData

            },
            {
              path:"/dashboard/details/:id",
              element:<Details/>,
              loader:fetchDetails
            }
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
