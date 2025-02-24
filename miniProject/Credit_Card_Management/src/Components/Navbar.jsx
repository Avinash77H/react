import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import CardLogo from '../assets/CardLogo.png'
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({setIsSide}) {

  return (
    <div>
      <nav className='sticky top-0 flex justify-between py-3 sm:p-0 items-center bg-[#3D8D7A] text-white shadow-lg'>
        <div className='flex items-center'>
          <img src={CardLogo} alt="card-image" className='size-16 rounded-full ml-10 hidden sm:block' />
          <RxHamburgerMenu className='sm:hidden ml-4' onClick={() => setIsSide((prev) => !prev)}/>
         
        </div>
        
        <div className='mr-2 sm:mr-10'>
          <ul className='flex text-sm sm:text-lg sm:gap-x-2'>
            <li>
              <NavLink
                to="/login"
                className="px-2 py-1.5 sm:px-3 rounded transition duration-200 hover:bg-[#A3D1C6] hover:text-black"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className="px-2 py-1.5 sm:px-3 rounded transition duration-200 hover:bg-[#A3D1C6] hover:text-black"
              >
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