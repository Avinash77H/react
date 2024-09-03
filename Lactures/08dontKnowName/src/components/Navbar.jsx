import React from 'react'
import img from '../assets/navlogo.jpg'
import {Link,NavLink,Outlet} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        
        <div className=' p-4 flex justify-around items-center'>
        <div className='w-[10%] '>
            <img src={img} alt="img" />
        </div>
      <div>
        <nav>
            <ul className='flex gap-4'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to="/Shop">Shop</NavLink></li>
                   
            </ul>
        </nav>
      </div>
      
    </div>
    <Outlet/>
    </div>
  )
}

export default Navbar
