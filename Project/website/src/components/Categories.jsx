import React from 'react'
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";

function Categories() {
  return (
    <div className='border-2 border-green-500 '>
      <div className='flex items-center gap-2'>
        <div className='rounded-full w-8 h-8 '>
          < CiCircleChevLeft className='w-full h-full '/>
        </div>
        <div className='rounded-full w-8 h-8'>
        <CiCircleChevRight className='w-full h-full'/>
        </div>
        <span>SHOP BY CATEGORIES</span>
      </div>

      <div className='border-2 border-black px-12 flex'>
        <div className='border-2 border-red-500 py-[200px] w-[75%] '></div>
        <div className='border-2 border-green-500 py-[200px] w-[25%] flex flex-col  justify-between'>
          <div className='empty-div'></div>
          <p>Discovery all <br />new items</p>
          <MdArrowOutward className='border-2 border-black rounded-full ' />
        </div>
      </div>
      
    </div>
  ) 
}

export default Categories
