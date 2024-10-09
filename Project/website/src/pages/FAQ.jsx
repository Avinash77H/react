import React from 'react'
import bgImg from "../assets/shop_background.png";
import Accordion from '../components/Accordion'
import { MdArrowOutward } from "react-icons/md";
import Footer from '../components/Footer';

function FAQ() {
  return (
    <div>
        <div
        className=" text-center  px-4 py-20 my-4 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
          <h1 className="font-normal text-4xl">FAQ 01</h1>
      </div>

    {/* accordion section */}
    <div className='mt-20 mx-8 flex flex-col md:flex-row gap-12 md:gap-4 '>

      {/* accordion container */}
      <div className='w-full md:w-[60%]'>
    <Accordion/>
      </div>

      {/* right box */}
      <div className='w-full md:w-[40%] '>
        <div className='bg-[#f2f2f2] rounded-xl py-8 px-8'>
        <h3 className='text-xl mb-2 pt-2'>Have a question</h3>
        <p className='text-[11px] text-md text-gray-600'>If you have an issue or question that requires immediate assistance, you can click the button below to chat live with a Customer Service representative.</p>
        <p className='text-[11px] text-md text-gray-600 pt-4'>Please allow 06 - 12 business days from the time your package arrives back to us for a refund to be issued.</p>

        <div className='pt-4 flex gap-4'>
        <button className="flex items-center  gap-2 bg-black text-white text-sm px-2 py-2 lg:py-2 lg:px-4 button-hover ">
              Contact us
              
            </button>
        <button className="flex gap-1 items-center border-b border-b-black text-sm  hover:text-red-500 hover:border-b-red-500">
              Live Chat
              <MdArrowOutward className="inline" />
            </button>
        </div>
        </div>
      </div>
    </div>

    <Footer/>
    


    </div>
  )
}

export default FAQ
