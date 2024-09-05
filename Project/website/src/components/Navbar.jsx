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
    <div className='border-2 border-green-500 px-[40px] absolute z-[1000] w-full top-10'>
      <nav>
        <div className='flex justify-between items-center'>

        <button className='lg:hidden'>
          <VscThreeBars className='text-2xl'/>
        </button>

            <a href="#" className="flex items-center space-x-3">
            <img src={navLogo} className="h-3 sm:h-4 " alt="ecomus Logo" />
            </a>

      <ul className='hidden lg:flex gap-4 '>
        <li >
          <NavLink to='/'>home</NavLink>
          {/* <a href="#" className="relative before:content-[''] before:absolute before:bottom-0 before:h-[2px] before:bg-black before:left-0 before:duration-300 before:w-0 hover:before:w-full">Home</a> */}
        </li>

        <li>
          <NavLink to='/shop'>shop</NavLink>
          {/* <a href="#" className='navlink-hover'>Shop</a> */}
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
          {/* <a href="#"className='navlink-hover' >Product</a> */}
        </li>
        <li>
          <NavLink to='/pages'>Pages</NavLink>
            {/* <button className='navlink-hover'>Pages <FaAngleDown className='inline'/></button> */}
        </li>
      </ul>

            <div className='flex md:gap-4 p-2 '>
            <a href="#"><IoSearch className='w-[25px] h-[25px] hover:text-red-600 '/></a>   
            <a href="#"><IoPersonOutline className='w-[25px] h-[25px] hover:text-red-600 hidden md:block'/></a>
            <a href="#" className='relative  hidden md:block'><FaRegHeart className='w-[25px] h-[25px]  hover:text-red-600'/><span className='bg-red-700  rounded-full text-white px-[6px] absolute -top-1 -right-2 text-[12px]'>0</span></a>
            <a href="#" className='relative'><RiShoppingBag2Line className='w-[25px] h-[25px]'/><span className='bg-red-700  rounded-full text-white px-[6px] absolute -top-1 -right-1 text-[12px]'>0</span></a>
    </div>

        </div>
      </nav>

      <div>
        <Outlet/>
      </div>
    </div>


  

 
  )
}




export default Navbar