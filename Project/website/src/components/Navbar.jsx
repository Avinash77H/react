import React from 'react'
import navLogo from '../assets/nav-logo.svg'
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";
import { VscThreeBars } from "react-icons/vsc";
import { NavLink, Outlet } from 'react-router-dom'


export function Navbar() {
  return (
    <>
    
      <div className=' w-full top-[30px] z-[1000]'>
        <nav>
          <div className='flex justify-between items-center px-[40px]'>
            <button className='lg:hidden'>
              <VscThreeBars className='text-2xl' />
            </button>

            <a href="#" className="flex items-center space-x-3">
              <img src={navLogo} className="h-3 sm:h-4 " alt="ecomus Logo" />
            </a>

            <ul className='hidden lg:flex gap-4 '>
              <li >
                <NavLink to='/' className="navlink-hover">home</NavLink>
              </li>
              <li>
                <NavLink to='/shop' className="navlink-hover">shop</NavLink>
              </li>
              <li>
                <NavLink to='/product' className="navlink-hover">Product</NavLink>
              </li>
              <li>
                <NavLink to='/pages' className="navlink-hover">Pages</NavLink>
              </li>
            </ul>

            <div className='flex md:gap-4 p-2 '>
              <a href="#"><IoSearch className='w-[25px] h-[25px] hover:text-red-600 ' /></a>
              <a href="#"><IoPersonOutline className='w-[25px] h-[25px] hover:text-red-600 hidden md:block' /></a>
              <a href="#" className='relative  hidden md:block'><FaRegHeart className='w-[25px] h-[25px]  hover:text-red-600' /><span className='bg-red-700  rounded-full text-white px-[6px] absolute -top-1 -right-2 text-[12px]'>0</span></a>
              <a href="#" className='relative'><RiShoppingBag2Line className='w-[25px] h-[25px]' /><span className='bg-red-700  rounded-full text-white px-[6px] absolute -top-1 -right-1 text-[12px]'>0</span></a>
            </div>

          </div>
        </nav>

        <Outlet />
      </div>


    
        
     
    </>





  )
}




export default Navbar