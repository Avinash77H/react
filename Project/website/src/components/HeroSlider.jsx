import React from "react";
import Slider from "react-slick";
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import { IoIosArrowForward } from "react-icons/io";
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
    <div className="slider-container border-2 border-purple-500 relative ">
          <div className="border-2 border-red-500 absolute z-[999] top-[35%] left-0 gap-4 p-4 ml-12">
            <h1 className="text-7xl font-normal">Glamorous <br/> Glam</h1>
            <p className="text-xl my-4">From casual to formal,we've got you covered</p>
            <button className="flex items-center self-start gap-2 bg-black text-white p-3">Shop collection<IoIosArrowForward/></button>
          </div>
      <Slider {...settings}>
        <div>
        <div className='bg-cover bg-center bg-no-repeat border-2  h-screen border-red-500' style={{ backgroundImage: `url(${slide1})` }}>  
        </div>
        </div>
        <div> 
        <div className='bg-cover bg-center bg-no-repeat border-2 h-screen border-red-500' style={{ backgroundImage: `url(${slide2})` }}>     
        </div>
        </div>
        <div>
        <div className='bg-cover bg-center bg-no-repeat p-[250px] h-screen border-red-500' style={{ backgroundImage: `url(${slide3})` }}>
        </div>
        </div>
       
      </Slider>
    </div>
  );
}

export default HeroSlider;
