import React from "react";
import Slider from "react-slick";
import Card from "./Card";





function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  // console.log("st",props.product);
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         {/* {productList.map((current)=>{
          return <Card details={current} ></Card>
         })} */}
      </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;