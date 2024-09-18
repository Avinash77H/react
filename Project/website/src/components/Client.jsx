import React from "react";
import Slider from "react-slick";
import { IoIosStar } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import card1Img from "../assets/card1.png";
import card2Img from "../assets/card2.png";
import card3Img from "../assets/grid2.jpg";
import card4Img from "../assets/grid1.jpg";

function Client() {
  const star = [];
  function factory(length) {
    for (let i = 0; i < length; i++) {
      star.push(<IoIosStar className="text-[#fc5732]" />);
    }
  }
  factory(5)

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
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

  return (
    <div className="mt-24 p-8 mx-2">
      <h2 className="text-2xl md:text-5xl text-center">Happy Clients</h2>
      <p className="text-md md:text-xl text-center mt-4 mb-20">
        Hear what they say about us
      </p>

      <div className="card-slider-container">
        <Slider {...settings}>

          <div>
            <div className="card-container  flex flex-col justify-between gap-4 p-4 group border border-gray-400 rounded-xl ml-4">
              <div className="div1 flex flex-col gap-2">
                <div className="start-container flex gap-2">
                 
                  {star.map((item) => {
                    return item;
                  })}
                </div>
                <p className="font-bold">Best Online Fashion Site</p>
                <p>
                  “ I always find something stylish and affordable on this web
                  fashion site ”
                </p>
              </div>

              <div className="div2">
                <p className="font-semibold">Robert smith</p>
                <p className="text-gray-600 text-sm">Customer from USA</p>
              </div>

              <div className="div3 flex border-t-2 pt-4 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <img src={card1Img} alt="card1" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm hover:text-red-500 hover:duration-200 hover:cursor-pointer">
                      Jersey thong body
                    </p>
                    <p className="font-semibold">$105.95</p>
                  </div>
                </div>

                <div className="border-2 border-black  rounded-full p-2 place-self-center hidden  group-hover:block ">
                  <MdArrowOutward />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card-container  flex flex-col justify-between gap-4 p-4 group border border-gray-400 rounded-xl ml-4 ml-4">

              <div className="div1 flex flex-col gap-2">
                <div className="start-container flex gap-2">
                  
                  {star.map((item) => {
                    return item;
                  })}
                </div>
                <p className="font-bold">Great Selection and Quality</p>
                <p>
                "I love the variety of styles and the high-quality clothing on this web fashion site."
                </p>
              </div>

              <div className="div2">
                <p className="font-semibold">Allen Lyn</p>
                <p className="text-gray-600 text-sm">Customer from France</p>
              </div>

              <div className="div3 flex border-t-2 pt-4 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <img src={card2Img} alt="card1" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm hover:text-red-500 hover:duration-200 hover:cursor-pointer">
                    Cotton jersey top
                    </p>
                    <p className="font-semibold">$7.95</p>
                  </div>
                </div>

                <div className="border-2 border-black  rounded-full p-2 place-self-center hidden  group-hover:block ">
                  <MdArrowOutward />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card-container  flex flex-col justify-between gap-4 p-4 group border border-gray-400 rounded-xl ml-4">
              <div className="div1 flex flex-col gap-2">
                <div className="start-container flex gap-2">
                  
                  {star.map((item) => {
                    return item;
                  })}
                </div>
                <p className="font-bold">Best Customer Service</p>
                <p>
                  
                "I finally found a web fashion site with stylish and flattering options in my size."
                                    
                </p>
              </div>

              <div className="div2">
                <p className="font-semibold">Peter Rope</p>
                <p className="text-gray-600 text-sm">Customer from USA</p>
              </div>

              <div className="div3 flex border-t-2 pt-4 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <img src={card3Img} alt="card1" className="w-[70px]" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm hover:text-red-500 hover:duration-200 hover:cursor-pointer">
                    Ribbed modal T-shirt
                    </p>
                    <p className="font-semibold">From $18.95</p>
                  </div>
                </div>

                <div className="border-2 border-black  rounded-full p-2 place-self-center hidden  group-hover:block ">
                  <MdArrowOutward />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card-container  flex flex-col justify-between gap-4 p-4 group border border-gray-400 rounded-xl ml-4">
              <div className="div1 flex flex-col gap-2">
                <div className="start-container flex gap-2">
                  {star.map((item) => {
                    return item;
                  })}
                </div>
                <p className="font-bold">Best Online Fashion Site</p>
                <p>
                  “ I always find something stylish and affordable on this web
                  fashion site ”
                </p>
              </div>

              <div className="div2">
                <p className="font-semibold">Robert smith</p>
                <p className="text-gray-600 text-sm">Customer from USA</p>
              </div>

              <div className="div3 flex border-t-2 pt-4 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <img src={card4Img} alt="card1" className="w-[70px]" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm hover:text-red-500 hover:duration-200 hover:cursor-pointer">
                      Jersey thong body
                    </p>
                    <p className="font-semibold">$105.95</p>
                  </div>
                </div>

                <div className="border-2 border-black  rounded-full p-2 place-self-center hidden  group-hover:block ">
                  <MdArrowOutward />
                </div>
              </div>
            </div>
          </div>

        </Slider>
      </div>

      
    </div>
  );
}

export default Client;
