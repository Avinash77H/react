import React from 'react'
import myntraLogo from '../assets/myntra_logo.png'
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const likedItems = useSelector((state)=>state.like)
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
                <NavLink to='/beauty'>Beauty</NavLink>
                <NavLink to='/fragrances'>Fragrances</NavLink>
                <NavLink to='/furniture'>Furniture</NavLink>
                <NavLink to='/groceries'>Groceries</NavLink>
            </div>
            <div className='flex gap-4'>
               <NavLink to='/profile'>
               <div className='flex flex-col  items-center'>
                    < VscAccount className='size-6'/>
                    <p className='text-sm'>Profile</p>
                </div>
               </NavLink>
                <NavLink to='/whishlist'>
                <div className='flex flex-col  items-center relative '>
                    < CiHeart className=' size-6'/>
                    <div className='absolute bg-red-500 size-4 rounded-full right-2 -top-1 flex justify-center items-center text-white'>{likedItems.length}</div>
                    <p className='text-sm'>Whishlist</p>
                </div>
                </NavLink>
                <NavLink to='bag'>
                <div className='flex flex-col  items-center'>
                    < IoBag className='size-6'/>
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
