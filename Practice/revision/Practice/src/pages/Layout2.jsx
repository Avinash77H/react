import React from 'react'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Navbar from '../components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function Layout2() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route Path='/about' element={<About/>}></Route>
                <Route Path='/shop' element={<Shop/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout2