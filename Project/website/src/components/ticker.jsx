import React from 'react'
import { AiFillThunderbolt } from "react-icons/ai";

function Marquee() {
  return (
    <div className='flex justify-evenly'>
       <div className="ticker-wrap border-2 border-blue-500 mt-4 w-screen">
        <div className="ticker flex gap-12">
            <div className="ticker-item flex items-center ">
                <AiFillThunderbolt/> Spring  Clearance Event:Save Up to 70%
            </div>
            <div className="ticker-item flex items-center ">
                <AiFillThunderbolt/> Spring Clearance Event:Save Up to 70%
            </div>
            <div className="ticker-item flex items-center ">
                <AiFillThunderbolt/> Spring Clearance Event:Save Up to 70%
            </div>
            <div className="ticker-item flex items-center ">
                <AiFillThunderbolt/> Spring Clearance Event:Save Up to 70%
            </div>
    
        </div>
       </div>
    </div>
  )
}

export default Marquee