import React from "react";
import aboutHero from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
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

      <div className=" flex mx-8 mt-24">
        <div
          className="w-1/2 lg:py-52 xl:py-80 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${about2})` }}
        ></div>
        <div className="w-1/2 flex flex-col justify-center items-start  gap-4 py-12 px-20">
          <h5 className="text-3xl">Established - 1995</h5>
          <p className="text-gray-500 text-sm">
            Ecomus was founded in 1995 by Jane Smith, a fashion lover with a
            passion for timeless style. Jane had always been drawn to classic
            pieces that could be worn season after season, and she believed that
            there was a gap in the market for a store that focused solely on
            classic women's clothing. She opened the first store in a small town
            in New England, where it quickly became a local favorite.
          </p>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
