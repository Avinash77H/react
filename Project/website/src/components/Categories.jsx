import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import fashion from "../assets/fashion.jpg";
import bags from "../assets/bags.jpg";
import accessories from "../assets/accessories.jpg";
import cloth from "../assets/clothing.jpg";
import sunglass from "../assets/sunglasses.jpg";

const productList = [
  {
    name: "Clothing",
    image: cloth,
  },
  {
    name: "Sunglasses",
    image: sunglass,
  },
  {
    name: "Bags",
    image: bags,
  },
  {
    name: "Fashion",
    image: fashion,
  },
  {
    name: "Accessories",
    image: accessories,
  },
];

function Categories() {


  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <div className="">
        <div className="flex items-center gap-2 mt-4 ml-16">
          <div className="rounded-full"></div>
          <div className="rounded-full"></div>
          <span className="ml-16 mb-1">SHOP BY CATEGORIES</span>
        </div>

        <div className=" px-12 flex flex-col items-center xl:flex-row justify-around border-2 border-purple-500 ">
          <div className="w-3/4 pt-12 place-self-auto categories-slider">
            <Slider {...settings}>
              {productList.map((item) => {
                return (
                  <div>
                    <Card details={item} />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="xl:w-1/4 xl:aspect-square border-2 place-self-stretch border-black rounded-xl  xl:px-8 xl:pt-8 xl:mt-16 flex  items-center justify-between xl:flex-col xl:items-start">
            <p className="text-lg text-wrap xl:text-4xl font-normal xl:pt-40">
              Discovery all new items
            </p>
            <a href="">
              <MdArrowOutward className="border-2 border-black rounded-full xl:mt-4  w-8 h-8 md:h-12 md:w-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
