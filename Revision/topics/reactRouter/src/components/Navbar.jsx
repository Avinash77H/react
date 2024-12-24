import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Navbar() {
    return (
       <div>
         <div>
            <nav>
                <div className='flex justify-between items-center px-40 py-2 bg-gray-500 text-white'>
                    <h1 className='font-bold text-3xl'>NavLogo</h1>
                    <ul className='flex gap-4'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
        <Outlet/>
       </div>
    )
}

export default Navbar