import React from "react";
import Slider from "react-slick";
import Card from "./Card";

import fashion from '../assets/fashion.jpg'
import bags from '../assets/bags.jpg'
import accessories from '../assets/accessories.jpg'
import cloth from '../assets/clothing.jpg'
import sunglass from '../assets/sunglasses.jpg'


const productList = [{
  name: 'Fashion1',
  image: fashion,
  
}, {
  name: 'Bags2',
  image: bags,
},
{
  name: 'Accessories3',
  image: accessories
}, {
  name: 'Cloth4',
  image: cloth,
},
{
  name: 'Sunglass5',
  image: sunglass
}]




function MultipleItems({props}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         {props.map((current)=>{
          return <Card details={current} ></Card>
         })}
      </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;