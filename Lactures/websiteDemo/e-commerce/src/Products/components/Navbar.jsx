import React from 'react'
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Navbar() {
  const whisthListProduct = useSelector((state)=>state.whishList)
  const cartProduct = useSelector((state)=>state.cart)
  return (
    <div>
      <nav className='flex justify-between items-center px-20 py-2 bg-gray-200 w-full fixed top-0 z-50'>
        <div>
            <img src={logo} alt="" className='size-8'/>
        </div>
        <div>
            <ul className='flex gap-4'>
                <NavLink  to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/profile">Profile</NavLink>
               
            </ul>
        </div>

        <div className='flex gap-4'>

        <div className='relative'>
        <NavLink to="/whishlist"><FaHeart className='size-6'/></NavLink>
        <div className='flex justify-center items-center rounded-full w-4 h-4 bg-red-500  text-white absolute right-[-10px] top-[-5px]'>
        <span>{whisthListProduct.length}</span>
        </div>
        </div>

       <div className='relative'>
       <NavLink to="/cart"><FaShoppingCart className='size-6'/></NavLink>
       <div className='flex justify-center items-center rounded-full w-4 h-4 bg-red-500 text-white absolute right-[-10px] top-[-5px]'>
       <span>{cartProduct.length}</span>
       </div>
       </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
