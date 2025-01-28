import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

function Navbar() {
    const {isAuth} = useAuth();
   
    return (
       <div>
         <div>
            <nav>
                <div className='flex justify-between items-center px-40 py-2 bg-gray-500 text-white'>
                    <h1 className='font-bold text-3xl'>NavLogo</h1>
                    <ul className='flex gap-4'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/help">help</NavLink></li>
                        <li><NavLink to="/career">career</NavLink></li>
                        {isAuth ?"":<li><NavLink to="/login">Login</NavLink></li>}
                        {isAuth ? <li><NavLink to="/profile">Profile</NavLink></li>:""}
                        {isAuth ? "":<li><NavLink to="/sign">Sign In</NavLink></li>}
                    </ul>
                </div>
            </nav>
        </div>
        <Outlet/>
       </div>
    )
}

export default Navbar