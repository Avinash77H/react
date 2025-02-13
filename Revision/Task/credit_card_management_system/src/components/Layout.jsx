import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Container from './Container'
import Dashboard from '../pages/Dashboard'
import CardPage from '../pages/CardPage'
import Histrory from '../pages/Histrory'
import ManageCard from '../pages/ManageCard'
import CreateCard from '../pages/CreateCard'
import ModifyCard from '../pages/ModifyCard'


function Layout() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      children:[
        {
          path:"/",
          element:<Container/>,
          children:[
            
              {
                path:"/login",
                element:<Login/>
              },
              {
                path:"/signup",
                element:<Signup/>
              },
              {
                path:'/home',
                element:<Home/>
              },
              {
                path:'/dashboard',
                element:<Dashboard/>,
                children:[
                  {
                    index:true,
                    element:<CardPage/>
                  },
                  {
                    path: "cardpage",
                    element: <CardPage />,
                  },
                  {
                    path:'history',
                    element:<Histrory/>
                  }
                ]
              },
              {
                path:'/managecard',
                element:<ManageCard/>,
                children:[
                  {
                    index:true,
                    element:<CreateCard/>
                  },
                  {
                    path: "createcard",
                    element: <CreateCard />,
                  },
                  {
                    path:'modifycard',
                    element:<ModifyCard/>
                  }
                ]
              }
            
          ],
          
        }
       
       
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>

    </div>
  )
}

export default Layout
