import React from 'react'
import img from '../assets/navlogo.jpg'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-around'>
      <div>
        <img src={img} alt="logo" className='h-10 w-10' />
      </div>
      <nav>
        <ul className='flex gap-4'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
        </ul>
        
       
        
      </nav>
    </div>
  )
}

export default Navbar
