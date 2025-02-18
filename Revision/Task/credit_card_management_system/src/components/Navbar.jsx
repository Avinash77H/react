import React from 'react';
import cards_icon from '../assets/cards_icon.png';
import { NavLink, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='border-2 border-red-500  sticky top-0 flex justify-between items-center px-4 py-2 bg-[#7886C7] text-white shadow-lg'>
        {/* icon */}
        <div className='flex items-center'>
          <img src={cards_icon} alt="card-image" className='size-8   rounded-full'/>
          <span className='ml-2 text-2xl font-semibold sm:text-xl'>Credit</span>
        </div>
        {/* nav-link */}
        <div>
          <ul className='flex space-x-6'>
            <li>
              <NavLink 
                to="/login" 
                className="px-4 py-1.5 rounded transition duration-200 hover:bg-[#A9B5DF]">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/signup" 
              className="px-4 py-1.5 rounded transition duration-200 hover:bg-[#A9B5DF]">
                SignUp
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default Navbar;