import React from "react";
import aboutHero from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";
import { PiLeaf } from "react-icons/pi";
import { MdOutlineDiamond } from "react-icons/md";
import { PiTriangleBold } from "react-icons/pi";
import CustomerReviewSlider from "../components/CustomerReviewSlider";
import ShopGram from "../components/ShopGram";
import Footer from "../components/Footer";

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
          <p className="text-gray-500 text-sm xl:text-lg text-center md:text-start">
            Ecomus was founded in 1995 by Jane Smith, a fashion lover with a
            passion for timeless style. Jane had always been drawn to classic
            pieces that could be worn season after season, and she believed that
            there was a gap in the market for a store that focused solely on
            classic women's clothing. She opened the first store in a small town
            in New England, where it quickly became a local favorite.
          </p>
        </div>
      </div>

      <div className=" flex mx-8 mt-24 flex-col-reverse md:flex-row-reverse md:gap-8 justify-center">
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
          <p className="text-gray-500 text-center md:text-start text-sm xl:text-lg">
            Our mission is to empower people through sustainable fashion. We
            want everyone to look and feel good, while also doing our part to
            help the environment.We believe that fashion should be stylish,
            affordable and accessible to everyone. Body positivity and
            inclusivity are values that are at the heart of our brand.
          </p>
        </div>
      </div>

      {/* priority  */}
      <div className="text-center mt-32 mx-8 bg-orange-100  p-8 md:p-20">
        <h2 className="text-2xl lg:text-5xl font-semibold">
          Quality is our priority
        </h2>
        <p className="text-sm xl:text-xl mt-8">
          Our talented stylists have put together outfits that are perfect for
          the season. They've variety of ways to inspire your next
          fashion-forward look.
        </p>

        <div className="text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-12 gap-y-8">
          {/* div-1 */}
          <div className="flex flex-col items-center ">
            <div className="border-2 border-black p-4 md:p-8 rounded-full">
              <PiLeaf className="w-8 h-8 md:w-12 md:h-12" />
            </div>
            <h3 className="mt-8 text-2xl font-semibold">
              High-Quality Materials
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Crafted with precision and excellence, our activewear is
              meticulously engineered using premium materials to ensure
              unmatched comfort and durability.
            </p>
          </div>

          {/* div-2 */}
          <div className=" flex-col items-center hidden md:flex">
            <div className="border-2 border-black p-4 md:p-8 rounded-full">
              <MdOutlineDiamond className="w-12 h-12" />
            </div>
            <h3 className="mt-8 text-2xl font-semibold">Laconic Design</h3>
            <p className="text-sm text-gray-600 mt-2">
              Simplicity refined. Our activewear embodies the essence of
              minimalistic design, delivering effortless style that speaks
              volumes.
            </p>
          </div>

          {/* div-3 */}
          <div className="flex-col items-center hidden md:flex">
            <div className="border-2 border-black p-4 md:p-8 rounded-full">
              <PiTriangleBold className="w-12 h-12" />
            </div>
            <h3 className="mt-8 text-2xl font-semibold">Various Sizes</h3>
            <p className="text-sm text-gray-600 mt-2">
              Designed for every body and anyone, our activewear embraces
              diversity with a wide range of sizes and shapes, celebrating the
              beauty of individuality.
            </p>
          </div>
        </div>
      </div>

      <CustomerReviewSlider />

      <ShopGram />
      <Footer />
    </div>
  );
}

export default AboutUs;
