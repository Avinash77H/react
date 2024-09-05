import React from 'react'
import Home from './Home'
import Shop from './Shop'
import Product from './Products'
import Pages from './Pages'
import {createBrowserRouter,RouterProvider,Route} from 'react-router-dom'
import Navbar from './Navbar'

const List = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/product',
        element:<Product/>
      },
      {
        path:'/pages',
        element:<Pages/>
      }
    ]
  }

])

function Layout() {
  return (
    <div>
      <RouterProvider router={List}></RouterProvider>
    </div>
  )
}

export default Layout