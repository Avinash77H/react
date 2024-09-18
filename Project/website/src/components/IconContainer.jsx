import React from 'react'
import { LuBox } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
function IconContainer() {
  return (
    <div className='grid mx-12 mt-12 grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-4 '>
      <div className='flex flex-col justify-between gap-2 items-center border py-4 rounded-xl'>
          <LuBox className='text-3xl'/>
          <p className='font-semibold'>Free Shipping</p>
          <p className='text-sm'>Free shipping over order $120</p>
      </div>
      <div className='flex flex-col justify-between gap-2 items-center border py-4 rounded-xl'>
          <MdOutlinePayment className='text-3xl'/>
          <p className='font-semibold'>Flexible Payment</p>
          <p className='text-sm'>Pay with Multiple Credit Cards</p>
      </div>
      <div className='flex flex-col justify-between gap-2 items-center border py-4 rounded-xl'>
          < IoMdReturnLeft className='text-3xl'/>
          <p className='font-semibold'>14 Day Returns</p>
          <p className='text-sm'>Within 30 days for an exchange</p>
      </div>
      <div className='flex flex-col justify-between gap-2 items-center border py-4 rounded-xl'>
          <BiSupport className='text-3xl'/>
          <p className='font-semibold'>Premium Support</p>
          <p className='text-sm'>Outstanding premium support</p>
      </div>
    </div>
  )
}

export default IconContainer
