import React from 'react'
import Navbar from './Navbar'
import HeroSlider from './HeroSlider'

function HomeLayout() {
  return (
    <div className='relative'>
      <Navbar/>
      <HeroSlider/>
    </div>
  )
}

export default HomeLayout
