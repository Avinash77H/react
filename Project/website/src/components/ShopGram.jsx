import React from 'react'
import Slider from "react-slick";
import gram1 from '../assets/gram1.jpg'
import gram2 from '../assets/gram2.jpg'
import gram3 from '../assets/gram3.jpg'
import gram4 from '../assets/gram4.jpg'
import gram5 from '../assets/gram5.jpg'

function ShopGram() {
  const grams =[gram1,gram2,gram3,gram4,gram5]
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className='mt-24 mx-12'>
       <h2 className="text-2xl md:text-5xl text-center">Shop Gram</h2>
      <p className="text-md md:text-xl text-center mt-4 mb-20">
      Hear what they say about usInspire and let yourself be inspired, from one unique fashion to another.
      </p>
      <div className='gram-container md:pr-8 '>
      <Slider {...settings}>
       
      {grams.map((item)=>{
        return <div className='w-full'>
          <img src={item} alt={item} className='rounded-xl py-4 pr-2' />
        </div>
      })}
      </Slider>
    </div>
    </div>
  )
}

export default ShopGram
