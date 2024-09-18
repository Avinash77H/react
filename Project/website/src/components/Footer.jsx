import React from "react";
import footerLogo from '../assets/nav-logo.svg'
import { MdArrowOutward } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { SiXstate } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import usLogo from '../assets/us.svg'
import { FaAngleDown } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="upper-container border-2 border-purple-500 flex justify-evenly mx-12 ">
        <div className="w-1/4 ">
          <a href="#" className="flex items-center space-x-3">
            <img src={footerLogo} className="h-3 sm:h-4 " alt="ecomus Logo" />
          </a>
          <ul className="text-wrap">
            <li>Address: 1234 Fashion Street, Suite 567,
            New York, NY 10001</li>
            <li>Email: <a href=""> info@fashionshop.com</a></li>
            <li>Phone: <a href="">(212) 555-1234</a></li>
          </ul>
          <div className="border-b-2 border-b-black inline pb-2">
          Get direction <MdArrowOutward className="inline"/>
          </div>
          <div className='hidden lg:flex gap-1 '>
          <div className='p-2 rounded-full border border-black hover:bg-blue-700 hover:text-white hover-transition'>
            <FaFacebookF />
          </div>
          <div className='p-2 rounded-full border border-black hover:bg-gray-600 hover:text-white hover-transition'>
            <SiXstate />
          </div>
          <div className='p-2 rounded-full border border-black hover:bg-gradient-to-t from-yellow-400 via-red-400 to-purple-700 hover:text-white hover-transition'>
            <SlSocialInstagram />
          </div>
          <div className='p-2 rounded-full border border-black hover:bg-gradient-to-t from-red-500 via-black to-cyan-400 hover:text-white hover-trasition'>
            <FaTiktok />
          </div>
          <div className='p-2 rounded-full border border-black hover:bg-red-600 hover:text-white hover-transition'>
            <SlSocialPintarest />
          </div>
        </div>
        </div>

        <div className="w-1/4">
          <h6>Help</h6>
          <ul>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Returns + Exchanges</a></li>
            <li><a href="">Shipping</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">FAQ’s</a></li>
            <li><a href="">Compare</a></li>
            <li><a href="">My Wishlist</a></li>
          </ul>
        </div>

        <div className="w-1/4">
          <h6>About us</h6>
          <li><a href="">Our Story</a></li>
          <li><a href="">Visit Our Store</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Account</a></li>
        </div>

        <div className="w-1/4">
        <h6>Sign Up for Email</h6>
        <p>Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>

        <fieldset className="flex  border border-gray-500 px-2 ">
          <input type="text" placeholder="Enter your email..." className="border-none"/>
          <button className="flex items-center  gap-2 bg-black text-white py-2 px-4 button-hover sm:p-2 md:p-3">Subscribe<MdArrowOutward className="inline"/></button>
        </fieldset>

        <div className='hidden lg:flex gap-4 '>
          <div className=' flex items-center gap-1 cursor-pointer'>
            <img src={usLogo} alt="uslogo" className='inline w-4' />
            <p>USD</p>
            <FaAngleDown/>
          </div>
          <div className='flex items-center cursor-pointer'>
            <p>English</p>
            <FaAngleDown/>
          </div>
        </div>
        </div>

       

      </div>
      <div className="lower-container"></div>
    </div>
  );
}

export default Footer;
