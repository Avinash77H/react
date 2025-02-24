import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Container from './Container'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'
import CardPage from '../Pages/CardPage'
import History from '../Pages/History'
import ManageCard from '../Pages/ManageCard'
import CreateCard from '../Pages/CreateCard'
import ModifyCard from '../Pages/ModifyCard'
import AddExpense from '../Pages/AddExpense'


const Layout = () => {



  const List = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
      children: [

        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/dashboard',
          element: <Dashboard />,
          children: [
            {
              index: true,
              element: <CardPage />
            },
            {
              path: "cardpage",
              element: <CardPage />,
            },
            {
              path: 'history',
              element: <History />
            }
          ]
        },
        {
          path: '/managecard',
          element: <ManageCard />,
          children: [
            {
              index: true,
              element: <CreateCard />
            },
            {
              path: "createcard",
              element: <CreateCard />,
            },
            {
              path: 'modifycard',
              element: <ModifyCard />
            }
          ]
        },
        {
          path: '/addExpense',
          element: <AddExpense />
        }

      ],
    }
  ])

  return (
    <div>
      <RouterProvider router={List}></RouterProvider>
    </div>
  )
}

export default Layout