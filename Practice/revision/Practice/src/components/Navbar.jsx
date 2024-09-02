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
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Shop'>Shop</Link></li>
            
        </ul>
        {/* <a ><Link to='/Home'>Home</Link></a>
        <a ><Link to='/About'>About</Link></a>
        <a > <Link to='/Shop'>Shop</Link></a>
        <a ><Link to='/Error'>Error</Link></a> */}
       
        
      </nav>
    </div>
  )
}

export default Navbar
