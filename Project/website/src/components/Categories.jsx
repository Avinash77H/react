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
  const settings = {
    focusOnSelect: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 500,
  };
  return (
    <div>
      <div className="flex items-center gap-2 mt-4 ml-16">
        <div className="rounded-full  "></div>
        <div className="rounded-full "></div>
        <span className="ml-[50px]">SHOP BY CATEGORIES</span>
      </div>

      <div className=" px-12 flex justify-around">
        <div className="w-[75%] pt-[50px]">
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
        <div className="border-2 border-black rounded-xl  px-8 pt-8 mt-16">
          <p className=" text-4xl font-normal pt-40">
            Discovery all <br />
            new items
          </p>
          <a href="">
            <MdArrowOutward className="border-2 border-black rounded-full mt-4 h-12 w-12 " />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Categories;
