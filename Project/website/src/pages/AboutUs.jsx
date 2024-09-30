import React from "react";
import aboutHero from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";
import aboutSlider1 from "../assets/aboutSlider1.jpg";
import aboutSlider2 from "../assets/aboutSlider2.jpg";

function AboutUs() {
  return (
    <div className="mt-4 ">
      {/* hero section */}
      <div
        className="bg-cover bg-center py-96"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <h1 className="text-2xl md:text-5xl xl:text-7xl text-white font-normal  text-center md:mx-20 ">
          Empowering women to achieve fitness goals with style
        </h1>
      </div>

      <div className=" border-b border-b-gray-300 flex justify-center py-16 mx-8 mb-8">
        <div className="xl:w-1/2">
          <h2 className="text-center mb-8 text-2xl md:text-4xl xl:text-5xl font-normal">
            We are Ecomus
          </h2>
          <p className="text-center px-2 text-gray-500 text-sm lg:text-lg">
            Welcome to our classic women's clothing store, where we believe that
            timeless style never goes out of fashion. Our collection features
            classic pieces that are both stylish and versatile, perfect for
            building a wardrobe that will last for years.
          </p>
        </div>
      </div>

      <div className=" flex mx-8 mt-24 flex-col md:flex-row md:gap-8 justify-center ">
        <div
          className="w-full  bg-cover bg-no-repeat bg-center aspect-square "
          style={{ backgroundImage: `url(${about2})` }}
        ></div>
        <div className="w-full flex flex-col justify-center items-start  gap-4 py-12 ">
          <h5 className="text-3xl ">Established - 1995</h5>
          <p className="text-gray-500 text-sm xl:text-lg">
            Ecomus was founded in 1995 by Jane Smith, a fashion lover with a
            passion for timeless style. Jane had always been drawn to classic
            pieces that could be worn season after season, and she believed that
            there was a gap in the market for a store that focused solely on
            classic women's clothing. She opened the first store in a small town
            in New England, where it quickly became a local favorite.
          </p>
        </div>
      </div>

      <div className=" flex mx-8 mt-24 flex-col-reverse md:flex-row-reverse md:gap-8 justify-center border-2 border-green-500">
        <div
          className="w-3/4 md:w-[40%]   bg-cover bg-no-repeat bg-center aspect-square relative"
          style={{ backgroundImage: `url(${about3})` }}
        >
          <img
            src={about4}
            alt=""
            className="w-1/2 absolute -bottom-8  -right-20 aspect-auto"
          />
        </div>

        <div className="w-full md:w-[40%] flex flex-col justify-center items-center md:items-start  gap-4 py-12">
          <h5 className="text-3xl ">Our mission</h5>
          <p className="text-gray-500 text-sm xl:text-lg">
            Our mission is to empower people through sustainable fashion. We
            want everyone to look and feel good, while also doing our part to
            help the environment.We believe that fashion should be stylish,
            affordable and accessible to everyone. Body positivity and
            inclusivity are values that are at the heart of our brand.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
