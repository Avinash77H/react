import React from 'react'
import myntraLogo from '../assets/myntra_logo.png'
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { IoBag } from "react-icons/io5";

function Navbar() {
  return (
    <div>
      <div>
        <nav className='flex justify-around'>
            <div>
                <img src={myntraLogo} alt="logo" />
            </div>
            <div>
                
            </div>
            <div className='flex gap-4'>
                <div className='flex flex-col gap-1'>
                    < VscAccount/>
                    <p>Profile</p>
                </div>
                <div className='flex flex-col gap-1'>
                    < CiHeart/>
                    <p>Whishlist</p>
                </div>
                <div className='flex flex-col gap-1'>
                    < IoBag/>
                    <p>Bag</p>
                </div>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
