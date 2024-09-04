import React from "react";
import Slider from "react-slick";
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import Navbar from './Navbar'
import Topbar from './Topbar'


function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container ">
        {/* <Topbar/> */}
        <Navbar />
      <Slider {...settings}>
        <div>
        <div className='bg-cover bg-center bg-no-repeat border-2 p-[250px] border-red-500' style={{ backgroundImage: `url(${slide1})` }}>  
        </div>
        </div>
        <div>
        <div className='bg-cover bg-center bg-no-repeat border-2 p-[250px] border-red-500' style={{ backgroundImage: `url(${slide2})` }}>     
        </div>
        </div>
        <div>
        <div className='bg-cover bg-center bg-no-repeat p-[250px] border-2 border-red-500' style={{ backgroundImage: `url(${slide3})` }}>
        </div>
        </div>
       
      </Slider>
    </div>
  );
}

export default HeroSlider;
