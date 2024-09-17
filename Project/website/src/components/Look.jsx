import React from 'react'
import img1 from '../assets/look1.jpg'
import img2 from '../assets/look2.jpg'

function Look() {
  return (
    <div className='mt-20'>
       <h2 className="text-2xl md:text-5xl text-center">Shop the look</h2>
      <p className="text-md md:text-xl text-center my-4">
      Inspire and let yourself be inspired, from one unique fashion to another.
      </p>
      <div className='flex mt-12'>
        <img src={img1} alt="image1" className='w-full md:w-1/2'/>
        <img src={img2} alt="image1" className='hidden md:block w-1/2'/>
      </div>
    </div>
  )
}

export default Look
