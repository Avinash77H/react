import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import DashBoard from './DashBoard'
import Order from './Order'
import Products, { fetchData } from './Products'


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
