import React from 'react'
import Navbar from '../components/Navbar'
import Home from "./Home"
import About from './About'
import Help from "./Help"
import Career from "./Career"
import Login from "./Login"
import Profile from "./Profile"
import SignUP from "./SignUP"
import CareerDetails, { CareerDetailsData }  from "./CareerDetails"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CareerLoader } from './Career'
import { Suspense } from 'react'
import CareerLayout from './CareerLayout'
import ProtectedRoutes from '../components/ProtectedRoutes'

function Layout() {
  const router = createBrowserRouter( [
    {
      path:"/",
      element:<Navbar/>,
      children:[
        {
          path:"/",
          element : <Home/>
        },
        {
          path:"/about",
          element:<ProtectedRoutes>
            <About/>
          </ProtectedRoutes>
        },
        {
          path:"/help",
          element:<Help/>
        },
        {
          path:"/career",
          element:<CareerLayout/>,
          children:[
            {
              index:true,
              element:<Career/>,
              loader:CareerLoader,
              errorElement:<div>Failed to load career Data</div>,
            },
            {
              path:":id",
              element:<ProtectedRoutes>
                <CareerDetails/>
              </ProtectedRoutes>,
              loader:CareerDetailsData,
              errorElement:<div>Failed to load careerDetailsData Data</div>,
            }
          ]
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/sign",
          element:<SignUP/>
        }
      ]
    }
  ])
  return ( 
    <div>
      <Suspense fallback={<div>Loading....</div>}>

      <RouterProvider router={router}/>
      </Suspense>
    </div>
  )
}

export default Layout
