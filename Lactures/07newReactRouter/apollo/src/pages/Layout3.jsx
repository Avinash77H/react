import React from 'react'
import Home from './home'
import Contact from './contact'
import Shop from './shop'
import About from './about'
import Error from './Error'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Layout3() {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='*' element={<Error/>}></Route>

        </Routes>
    </BrowserRouter>
   </div>
  )
}

export default Layout3