import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
    return (
       <div>
         <div>
            <nav>
                <div className='flex justify-between items-center px-40 py-2 bg-gray-500 text-white'>
                    <h1 className='font-bold text-3xl'>NavLogo</h1>
                    <ul className='flex gap-4'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    </ul>
                </div>
            </nav>
        </div>
        <Outlet/>
       </div>
    )
}

export default Navbar