import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Login from './Login'
import Profile from './Profile'
import Whishlist from './Whishlist'
import Error from './Error'
import Cart from './Cart'
import Navbar from '../components/Navbar'

function Layout() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/whishlist' element={<Whishlist/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<Error/>}></Route>
            
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout
