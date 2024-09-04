import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { SiXstate } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import { FaAngleDown } from "react-icons/fa";
import usLogo from '../assets/us.svg'
import frLogo from '../assets/fr.svg'
import vnLogo from '../assets/vn.svg'
import deLogo from '../assets/de.svg'
import MySlider from './MySlider';


function Topbar() {
  return (
    <div>

      <div className='px-[40px]  flex justify-between items-center'>
        <div className='hidden lg:flex gap-1 '>
          <div className='p-2 rounded-full bg-gray-300 hover:bg-blue-700 hover:text-white hover-transition'>
            <FaFacebookF />
          </div>
          <div className='p-2 rounded-full bg-gray-300 hover:bg-gray-600 hover:text-white hover-transition'>
            <SiXstate />
          </div>
          <div className='p-2 rounded-full bg-gray-300 hover:bg-gradient-to-t from-yellow-400 via-red-400 to-purple-700 hover:text-white hover-transition'>
            <SlSocialInstagram />
          </div>
          <div className='p-2 rounded-full bg-gray-300 hover:bg-gradient-to-t from-red-500 via-black to-cyan-400 hover:text-white hover-trasition'>
            <FaTiktok />
          </div>
          <div className='p-2 rounded-full bg-gray-300 hover:bg-red-600 hover:text-white hover-transition'>
            <SlSocialPintarest />
          </div>
        </div>

        <div className='w-full lg:w-[33%]'>
          
          <MySlider/>
          
        </div>

        <div className='hidden lg:flex gap-4 '>
          <div className=' flex items-center gap-1 cursor-pointer'>
            <img src={usLogo} alt="uslogo" className='inline w-4' />
            <p>USD</p>
            <FaAngleDown/>
          </div>
          <div className='flex items-center cursor-pointer'>
            <p>English</p>
            <FaAngleDown/>
          </div>

          

        </div>

      </div>
      
    </div>
  )
}

export function Hover(){
  return (
    <>
          <div>
            <span>
              <img src={frLogo} alt="france-logo"/>
              &#8364;
            </span>
          </div>
    </>
  )
}
export default Topbar
