import React from 'react'
import { BsCart4 } from "react-icons/bs";
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='mx-20'>
      <nav className='flex justify-between items-center'>
        <NavLink to="/">
        <img src={logo} alt="" className='size-20'/>
        </NavLink>
        <div>
          <ul className='flex gap-8 '>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/cart"><BsCart4 className='size-5'/></NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
