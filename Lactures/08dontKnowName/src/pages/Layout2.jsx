import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Shop from './Shop'
import {createBrowserRouter,RouterProvider,Route} from 'react-router-dom'

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
                path:'/About',
                element:<About/>
            },
            {
                path:'/Contact',
                element:<Contact/>
            },
            {
                path:'/Shop',
                element:<Shop/>
            },
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
