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
        className="bg-cover bg-center border-2 border-green-500 py-96"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <h1 className="text-2xl md:text-5xl xl:text-7xl text-white font-normal  text-center md:mx-20 ">
          Empowering women to achieve fitness goals with style
        </h1>
      </div>

      <div className=" border-b border-b-gray-300 flex justify-center py-16 mx-8 mb-8">
       <div className="xl:w-1/2">
       <h2 className="text-center mb-8 text-2xl md:text-4xl xl:text-5xl font-normal">We are Ecomus</h2>
        <p className="text-center px-2 text-gray-500 text-sm lg:text-lg">
          Welcome to our classic women's clothing store, where we believe that
          timeless style never goes out of fashion. Our collection features
          classic pieces that are both stylish and versatile, perfect for
          building a wardrobe that will last for years.
        </p>
       </div>
      </div>
    </div>
  );
}

export default AboutUs;
