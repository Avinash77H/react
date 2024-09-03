import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Shop from './Shop'
import Error from './Error'
import Navbar from '../components/Navbar'


function Layout() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route path='/Contact' element={<Contact/>}>Contact</Route>
            <Route path='/About' element={<About/>}>About</Route>
            <Route path='/Shop' element={<Shop/>}>Shop</Route>
            <Route path='*' element={<Error/>}>Error</Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout
