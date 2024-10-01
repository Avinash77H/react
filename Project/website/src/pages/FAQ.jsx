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

    {/* accordion */}
    
    <Accordion/>


    </div>
  )
}

export default FAQ
