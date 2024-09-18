import React from "react";
import Slider from "react-slick";
import brand1 from "../assets/brand-01.png";
import brand2 from "../assets/brand-02.png";
import brand3 from "../assets/brand-03.png";
import brand4 from "../assets/brand-04.png";
import brand5 from "../assets/brand-05.png";
import brand6 from "../assets/brand-06.png";

function Swiper() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
  return (
    <>
      <div className="swiper-container border mx-12 mt-24 flex">
        {brands.map((item) => {
          return (
            <div className="border">
              <img src={item} alt="brand-1" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Swiper;
