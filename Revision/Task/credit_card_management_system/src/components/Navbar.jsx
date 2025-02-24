import React from 'react';
import cards_icon from '../assets/cards_icon.png';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({setIsSide}) {
  return (
    <div>
      <nav className='border-2 border-red-500  sticky top-0 flex justify-between items-center px-4 py-2 bg-[#7886C7] text-white shadow-lg'>
        {/* icon */}
        <div className='flex items-center'>
          <img src={cards_icon} alt="card-image" className='size-8 rounded-full ml-10 hidden sm:block'/>
          <span className='ml-2 text-2xl font-semibold sm:text-xl hidden sm:block'>Credit</span>
          <RxHamburgerMenu className='sm:hidden ml-4' onClick={()=>setIsSide((prev)=>!prev)}/>
        </div>
        {/* nav-link */}
        <div className=' sm:mr-10 '>
          <ul className='flex text-sm sm:text-lg sm:gap-x-2 lg:gap-x-6'>
            <li>
              <NavLink 
                to="/login" 
                className="px-2 py-1.5 rounded transition duration-200 hover:bg-[#A9B5DF]">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/signup" 
              className="px-2 py-1.5 rounded transition duration-200 hover:bg-[#A9B5DF]">
                SignUp
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;