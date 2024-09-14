import React from 'react'
import { AiFillThunderbolt } from "react-icons/ai";

  function MarqueeContain(length){
    let item = [];
    for(let i = 0; i < length;i++){
      item.push(<p className='flex gap-2 items-center '> <AiFillThunderbolt/> <span>Spring  Clearance Event:Save Up to 70%</span></p>)
    }
    return item
  }

function Marquee() {
  return (
    <div className='border-2 border-red-500 flex text-nowrap p-6 overflow-x-hidden gap-8 marquee-hover bg-[#fcffb2]'>
            <div className="ticker-item flex items-center gap-8 marquee-animation text-xl">
            {MarqueeContain(5)}
            </div>
            <div className="ticker-item flex items-center gap-8 marquee-animation text-xl">
            {MarqueeContain(5)}
            </div>
    </div>
  )
}

export default Marquee