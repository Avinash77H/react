import React from "react";
import footerLogo from "../assets/nav-logo.svg";
import { MdArrowOutward } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { SiXstate } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import usLogo from "../assets/us.svg";
import { FaAngleDown } from "react-icons/fa";
import paymentcard1 from "../assets/pcard1.png";
import paymentcard2 from "../assets/pcard2.png";
import paymentcard3 from "../assets/pcard3.png";
import paymentcard4 from "../assets/pcard4.png";
import paymentcard5 from "../assets/pcard5.png";
import { FaPlus } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <div className="upper-container border-y border-gray-300 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-12  md:mx-4 p-4 mt-12 mx-4">
        <div className="flex flex-col gap-4 ">
          <a href="#" className="flex items-center space-x-3">
            <img src={footerLogo} className="h-3 sm:h-4 " alt="ecomus Logo" />
          </a>
          <ul className="text-wrap mt-2 flex flex-col gap-2">
            <li>Address: 1234 Fashion Street, Suite 567,</li>
            <li>New York, NY 10001</li>
            <li>
              Email: <a href=""> info@fashionshop.com</a>
            </li>
            <li>
              Phone: <a href="">(212) 555-1234</a>
            </li>
          </ul>
          <div className="border-b-2 border-b-black inline pb-2 self-start hover:text-red-500 hover:border-red-500 hover:duration-200">
            Get direction <MdArrowOutward className="inline"/>
          </div>
          <div className="flex gap-2 ">
            <div className="p-2 rounded-full border border-black hover:bg-blue-700 hover:text-white hover-transition">
              <FaFacebookF />
            </div>
            <div className="p-2 rounded-full border border-black hover:bg-gray-600 hover:text-white hover-transition">
              <SiXstate />
            </div>
            <div className="p-2 rounded-full border border-black hover:bg-gradient-to-t from-yellow-400 via-red-400 to-purple-700 hover:text-white hover-transition">
              <SlSocialInstagram />
            </div>
            <div className="p-2 rounded-full border border-black hover:bg-gradient-to-t from-red-500 via-black to-cyan-400 hover:text-white hover-trasition">
              <FaTiktok />
            </div>
            <div className="p-2 rounded-full border border-black hover:bg-red-600 hover:text-white hover-transition">
              <SlSocialPintarest />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="special md:hidden flex justify-between item">
            <h6 className="text-xl font-semibold">Help</h6>
            <FaPlus />
          </div>
          <h6 className="text-xl font-semibold hidden lg:block">Help</h6>
          <ul className="hidden flex-col gap-2 lg:flex">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Returns + Exchanges</a>
            </li>
            <li>
              <a href="">Shipping</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">FAQ’s</a>
            </li>
            <li>
              <a href="">Compare</a>
            </li>
            <li>
              <a href="">My Wishlist</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
        <div className="special md:hidden flex justify-between item">
            <h6 className="text-xl font-semibold">About us</h6>
            <FaPlus />
          </div>
          <h6 className="text-xl font-semibold hidden lg:block">About us</h6>
          <ul className="hidden flex-col gap-2  lg:block">
            <li>
              <a href="">Our Story</a>
            </li>
            <li>
              <a href="">Visit Our Store</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Account</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
        <div className="special md:hidden flex justify-between item">
            <h6 className="text-xl font-semibold">Sign Up for Email</h6>
            <FaPlus />
          </div>
          <h6 className="text-xl font-semibold hidden lg:block">Sign Up for Email</h6>
          <p className="hidden lg:block">
            Sign up to get first dibs on new arrivals, sales, exclusive content,
            events and more!
          </p>

          <fieldset className="hidden  border border-gray-500 px-2  lg:flex">
            <input
              type="text"
              placeholder="Enter your email..."
              className="custom-input border-none"
            />
            <button className="flex items-center  gap-2 bg-black text-white text-sm py-1 px-2 button-hover sm:p-2 md:p-3">
              Subscribe
              <MdArrowOutward className="inline" />
            </button>
          </fieldset>

          <div className="hidden lg:flex gap-4 ">
            <div className=" flex items-center gap-1 cursor-pointer">
              <img src={usLogo} alt="uslogo" className="inline w-4"/>
              <p>USD</p>
              <FaAngleDown />
            </div>
            <div className="flex items-center cursor-pointer">
              <p>English</p>
              <FaAngleDown />
            </div>
          </div>
        </div>
      </div>
      <div className="lower-container flex flex-wrap justify-between mx-4 ">
        <p className="text-sm text-gray-600 p-4">
          © 2024 Ecomus Store. All Rights Reserved
        </p>
        <div className="flex gap-4 items-center">
          <img src={paymentcard1} alt="" className="w-12" />
          <img src={paymentcard2} alt="" className="w-12" />
          <img src={paymentcard3} alt="" className="w-12" />
          <img src={paymentcard4} alt="" className="w-12" />
          <img src={paymentcard5} alt="" className="w-12" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
