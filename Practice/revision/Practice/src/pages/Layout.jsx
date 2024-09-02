import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Error from './Error'
import Navbar from '../components/Navbar'

function Layout() {
  return (
   <BrowserRouter>
   <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Shop' element={<Shop/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
   </BrowserRouter>
  )
}

export default Layout
