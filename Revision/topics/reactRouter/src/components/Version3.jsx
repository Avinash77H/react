import React from 'react'
import { createBrowserRouter,RouterProvider,createRoutesFromChildren,Route} from 'react-router-dom'
import Home from './Home'
import Navbar from "./Navbar"
import About from "./About"
import Shop from "./Shop"
import Faq from './Faq'
import Help from './Help'
import ContactUs from './ContactUs'
import CareerLayout from './CareerLayout'
import Career from './Career'

function Version3() {
    const route=createBrowserRouter(
        createRoutesFromChildren(
          <Route path='/' element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='help' element={<Help/>}>
              <Route path='faq' element={<Faq/>}/>
              <Route path='contact' element={<ContactUs/>}/>
            </Route>
            <Route path='career' element={<CareerLayout/>}>
              <Route index element={<Career/>}/>
            </Route>
          </Route>
        )
    )
  return (
    <div>
       <RouterProvider router={route}/>
    </div>
  )
}

export default Version3