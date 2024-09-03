import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { SiXstate } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import { FaAngleDown } from "react-icons/fa";
import usLogo from '../assets/us.svg'

function Topbar() {
  return (
    <div>
      <div className='border-2 border-green-500 px-4 py-4 flex justify-between items-center'>
        <div className='flex gap-4'>
          <div className='p-2 rounded-full bg-gray-300 '>
            <FaFacebookF />
          </div>
          <div className='p-2 rounded-full bg-gray-300'>
            <SiXstate />
          </div>
          <div className='p-2 rounded-full bg-gray-300'>
            <SlSocialInstagram />
          </div>
          <div className='p-2 rounded-full bg-gray-300'>
            <FaTiktok />
          </div>
          <div className='p-2 rounded-full bg-gray-300'>
            <SlSocialPintarest />
          </div>
        </div>

        <div>
          <p>Time to refresh your wardrobe</p>
        </div>

        <div className='flex gap-4 '>
          <div className=' flex items-center gap-1  '>
            <img src={usLogo} alt="uslogo" className='inline w-4' />
            <p>USD</p>
            <FaAngleDown/>
          </div>
          <div className='flex items-center'>
            <p>English</p>
            <FaAngleDown/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Topbar
