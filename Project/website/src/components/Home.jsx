import React from 'react'
import HeroSlider from './HeroSlider'
import Navbar from './Navbar'

function Home() {
  return (
    <div>
       <div className="relative">
        <Navbar />
        <HeroSlider/>
      </div>
    </div>
  )
}

export default Home