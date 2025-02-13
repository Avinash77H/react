import React from 'react';
import cards_icon from '../assets/cards_icon.png';
import { NavLink, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between items-center p-4 bg-[#7886C7] text-white shadow-lg'>
        <div className='flex items-center'>
          <img src={cards_icon} alt="card-image" className='size-12 rounded-full'/>
          <span className='ml-2 text-2xl font-semibold'>Credit</span>
        </div>
        <div>
          <ul className='flex space-x-6'>
            <li>
              <NavLink 
                to="/login" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded transition duration-200 ${
                    isActive ? 'bg-[#7886C7] text-white' : 'hover:bg-[#A9B5DF] hover:text-white'
                  }`
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/signup" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded transition duration-200 ${
                    isActive ? 'bg-[#7886C7] text-white' : 'hover:bg-[#A9B5DF] hover:text-white'
                  }`
                }
              >
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