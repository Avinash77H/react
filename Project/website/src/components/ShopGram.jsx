import React from 'react'
import gram1 from '../assets/gram1.jpg'
import gram2 from '../assets/gram2.jpg'
import gram3 from '../assets/gram3.jpg'
import gram4 from '../assets/gram4.jpg'
import gram5 from '../assets/gram5.jpg'

function ShopGram() {
  const grams =[gram1,gram2,gram3,gram4,gram5]
  return (
    <div className='mt-24 mx-12'>
       <h2 className="text-2xl md:text-5xl text-center">Shop Gram</h2>
      <p className="text-md md:text-xl text-center mt-4 mb-20">
      Hear what they say about usInspire and let yourself be inspired, from one unique fashion to another.
      </p>
      <div className='w-full flex justify-between gap-2 pr-8'>
      {grams.map((item)=>{
        return <img src={item} alt={item} className='w-[20%] rounded-xl' />
      })}
    </div>
    </div>
  )
}

export default ShopGram
