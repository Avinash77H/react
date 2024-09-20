import React from "react";
import bgImg from "../assets/shop_background.png";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import grid1 from "../assets/grid1.jpg";
import grid2 from "../assets/grid2.jpg";
import grid3 from "../assets/grid3.jpg";
import grid4 from "../assets/grid4.jpg";
import grid5 from "../assets/grid5.jpg";
import grid6 from "../assets/grid6.jpg";
import grid7 from "../assets/grid7.jpg";
import grid8 from "../assets/grid8.jpg";
import grid9 from "../assets/grid9.jpg";
import grid10 from "../assets/grid10.jpg";
import grid11 from "../assets/grid11.jpg";
import grid12 from "../assets/grid12.jpg";
import Footer from "../components/Footer";

function Shop() {
  const product = [
    {
      img: grid1,
      name: "V-neck linen T-shirt",
      prize: "$114.95",
    },
    {
      img: grid2,
      name: "V-neck linen T-shirt",
      prize: "$114.95",
    },
    {
      img: grid3,
      name: "V-neck linen T-shirt",
      prize: "$114.95",
    },
    {
      img: grid4,
      name: "V-neck linen T-shirt",
      prize: "$114.95",
    },
    {
      img: grid5,
      name: "V-neck linen T-shirt",
      prize: "$114.95",
    },
    {
      img: grid6,
      name: "V-neck linen T-shirt",
      prize: "$114.95",
    },
    {
      img: grid7,
      name: "V-neck linen T-shirt",
      prize: "$114.95",
    },
    {
      img: grid8,
      name: "V-neck linen T-shirt",
      prize: "$114.95",
    },
    {
      img: grid9,
      name: "V-neck linen T-shirt",
      prize: "$114.95",
    },
    {
      img: grid10,
      name: "V-neck linen T-shirt",
      prize: "$114.95",
    },
    {
      img: grid11,
      name: "V-neck linen T-shirt",
      prize: "$114.95",
    },
    {
      img: grid12,
      name: "V-neck linen T-shirt",
      prize: "$114.95",
    },
  ];  
  return (
    <div className="">
      <div
        className="text-center  px-4 py-16 my-4 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div>
          <h1 className="font-normal text-4xl">New Arrival</h1>
          <p className="">Shop through our latest selection of Fashion</p>
        </div>
      </div>

      <div className="mx-9 flex justify-between items-center">
        <div className="border flex gap-2 p-2 items-center">
          <IoFilterSharp />
          <p>FILTER</p>
        </div>

        <div className="flex  gap-4">
          <div className="two">2</div>
          <div className="three hidden md:block">3</div>
          <div className="four hidden xl:block">4</div>
          <div className="five hidden xl:block">5</div>
          <div className="six hidden xl:block">6</div>
        </div>

        <div className="border flex gap-4 items-center p-2">
          <p>Featured</p>
          <IoIosArrowDown />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8  gap-y-12 mx-9 mt-8">
        {product.map((item) => {
          return (
            <div >
              <div>
                <img src={item.img} alt="grid1" className="rounded-xl"/>
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.prize}</p>
                <div className="flex gap-2">
                  <span className="bg-yellow-400 rounded-full p-2 border"></span>
                  <span className="bg-black rounded-full p-2 border"></span>
                  <span className="bg-white rounded-full p-2 border"></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

        <Footer/>
    </div>
  );
}

export default Shop;
