import React from 'react'
import myntraLogo from '../assets/myntra_logo.png'
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { NavLink, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div>
        <nav className='flex justify-around items-center'>
            <NavLink to='/'>
            <div >
                <img src={myntraLogo} alt="logo" className='size-20'/>
            </div>
            </NavLink>
            <div className='flex gap-8'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/dashboard'>Dashboard</NavLink>
            </div>
            <div className='flex gap-4'>
               <NavLink to='/profile'>
               <div className='flex flex-col gap-1 items-center'>
                    < VscAccount/>
                    <p className='text-sm'>Profile</p>
                </div>
               </NavLink>
                <NavLink to='/whishlist'>
                <div className='flex flex-col gap-1 items-center'>
                    < CiHeart/>
                    <p className='text-sm'>Whishlist</p>
                </div>
                </NavLink>
                <NavLink to='bag'>
                <div className='flex flex-col gap-1 items-center'>
                    < IoBag/>
                    <p className='text-sm'>Bag</p>
                </div>
                </NavLink>
            </div>
        </nav>
      </div>
      <Outlet/>

    </div>
  )
}

export default Navbar
