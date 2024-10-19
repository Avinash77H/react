import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <ul className='flex justify-evenly bg-green-200 py-2'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Sign up</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
