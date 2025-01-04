import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import BreadCrumb from './BreadCrumb'

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between items-center px-20 border-2 border-black'>
        <h1 className='text-3xl font-bold'>LOGO</h1>
        <div>
          <ul className='flex gap-4'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="details">Details</NavLink></li>
          </ul>
        </div>
      </nav>
      <main>
      <BreadCrumb/>
      <Outlet/>
      </main>
    </div>
  )
}

export default Navbar
