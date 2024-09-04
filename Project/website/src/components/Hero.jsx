import React from 'react'
import Navbar from './Navbar'
import Topbar from './Topbar'
import slide1 from '../assets/slide1.jpg'
import HeroSlider from './HeroSlider'


function Hero() {
    return (
        <div className=''>
            {/* <Topbar /> */}
            <div className='h-screen bg-contain bg-center bg-no-repeat border-2 border-red-500' style={{ backgroundImage: `url(${slide1})` }}>
                {/* <Navbar /> */}
            </div>

        </div>
    )
}

export default Hero
