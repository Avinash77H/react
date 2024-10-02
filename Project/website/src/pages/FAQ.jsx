import React from 'react'
import bgImg from "../assets/shop_background.png";
import Accordion from '../components/Accordion'

function FAQ() {
  return (
    <div>
        <div
        className="text-center  px-4 py-20 my-4 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
          <h1 className="font-normal text-4xl">FAQ 01</h1>
      </div>

    {/* accordion section */}
    <div className='border-2 border-purple-500 mt-20 mx-8 flex'>

      {/* accordion container */}
      <div className='w-[60%]'>
    <Accordion/>
      </div>

      {/* right box */}
      <div className='w-[40%] border-2 border-orange-500'>
        <div>
        <h3 className='text-xl pl-4 mb-2'>Have a question</h3>
        <p className='text-[11px] text-gray-600'>If you have an issue or question that requires immediate assistance, you can click the button below to chat live with a Customer Service representative.</p>
        <p className='text-[11px] text-gray-600'>Please allow 06 - 12 business days from the time your package arrives back to us for a refund to be issued.</p>
        </div>
      </div>
    </div>
    


    </div>
  )
}

export default FAQ
