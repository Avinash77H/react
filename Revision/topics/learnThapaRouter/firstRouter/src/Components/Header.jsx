import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
  <div className='flex justify-evenly'>
    <div>
      <h1 className='font-bold'>LOGO</h1>
    </div>
    <div>
      <ul className='flex gap-4'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/contactus">Contact Us</NavLink>
      </ul>
    </div>
  </div>
  )
}

export default Header
