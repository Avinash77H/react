import React from 'react'
import { AiFillThunderbolt } from "react-icons/ai";

function Marquee() {
  return (
    <div className='border-2 border-red-500 flex text-nowrap overflow-x-hidden gap-8 marquee-hover'>
            <div className="ticker-item flex items-center gap-8 marquee-animation">
               <p className='flex gap-2 items-center '> <AiFillThunderbolt/> <span>Spring  Clearance Event:Save Up to 70%</span></p>
               <p className='flex gap-2 items-center'> <AiFillThunderbolt/> <span>Spring  Clearance Event:Save Up to 70%</span></p>
               <p className='flex gap-2 items-center'> <AiFillThunderbolt/> <span>Spring  Clearance Event:Save Up to 70%</span></p>
               <p className='flex gap-2 items-center'> <AiFillThunderbolt/> <span>Spring  Clearance Event:Save Up to 70%</span></p>
               <p className='flex gap-2 items-center'> <AiFillThunderbolt/> <span>Spring  Clearance Event:Save Up to 70%</span></p>
            </div>
            <div className="ticker-item flex items-center gap-8 marquee-animation">
            <p className='flex gap-2 items-center'> <AiFillThunderbolt/> <span>Spring  Clearance Event:Save Up to 70%</span></p>
            <p className='flex gap-2 items-center'> <AiFillThunderbolt/> <span>Spring  Clearance Event:Save Up to 70%</span></p>
            <p className='flex gap-2 items-center'> <AiFillThunderbolt/> <span>Spring  Clearance Event:Save Up to 70%</span></p>
            <p className='flex gap-2 items-center'> <AiFillThunderbolt/> <span>Spring  Clearance Event:Save Up to 70%</span></p>
            <p className='flex gap-2 items-center'> <AiFillThunderbolt/> <span>Spring  Clearance Event:Save Up to 70%</span></p>
            </div>
    </div>
  )
}

export default Marquee