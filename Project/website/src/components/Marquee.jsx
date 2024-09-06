import React from 'react'
import { AiFillThunderbolt } from "react-icons/ai";

function Marquee() {
  return (
    <div className='flex justify-evenly'>
       <div className="thiker-wrap border-2 border-blue-500 mt-4">
        <div className="thiker">
            <div className="thiker-item">
                <AiFillThunderbolt/> Spring Clearance Event:Save Up to 70%
            </div>
        </div>
       </div>
    </div>
  )
}

export default Marquee