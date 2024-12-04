import React from 'react'
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between items-center px-20 py-2 bg-gray-200'>
        <div>
            <img src={logo} alt="" className='size-8'/>
        </div>
        <div>
            <ul className='flex gap-4'>
                <NavLink  to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/whishlist">Whishlist</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
