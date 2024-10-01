import React, { useState, useEffect, useRef } from "react";
import quote from "../assets/quote.svg";
import { IoStar } from "react-icons/io5";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import Slider from "react-slick";
import aboutSlider1 from "../assets/aboutSlider1.jpg";
import aboutSlider2 from "../assets/aboutSlider2.jpg";

// function CustomerReviewSlider() {
//   var settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: false,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 320,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: false,
//           dots: false,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="slider-container border-2 border-green-500">
//       <Slider {...settings}>
//         <div className="first-slide ">
//             <div className="w-full border-2 border-red-500 flex ">

//           <div className="w-1/2">
//             <h3 className="text-2xl lg:text-3xl font-semibold">
//               Our customer’s reviews
//             </h3>
//             <div>
//               <img src={quote} alt="quote-image" />
//             </div>
//             <div className="flex gap-2">
//               <IoStar className="text-orange-500 w-6 h-6" />
//               <IoStar className="text-orange-500 w-6 h-6" />
//               <IoStar className="text-orange-500 w-6 h-6" />
//               <IoStar className="text-orange-500 w-6 h-6" />
//               <IoStar className="text-orange-500 w-6 h-6" />
//             </div>
//             <p>
//               "I have been shopping with this web fashion site for over a year
//               now and I can confidently say it is the best online fashion site
//               out there.The shipping is always fast and the customer service
//               team is friendly and helpful. I highly recommend this site to
//               anyone looking for affordable clothing."
//             </p>
//             <p>Robert smith</p>
//             <div className=" mt-4  ">
//               <span className="rounded-full ">
//                 <CiCircleChevLeft className="w-8 h-8 inline" />
//               </span>
//               <span className="rounded-full ">
//                 <CiCircleChevRight className="w-8 h-8 inline" />
//               </span>
//             </div>
//           </div>

//           <div className="w-1/2">
//             <img src={aboutSlider1} alt="" />
//           </div>

//             </div>
//         </div>
//       </Slider>
//     </div>
//   );
// }

function CustomerReviewSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container grid grid-cols-1 md:grid-cols-2  items-center gap-x-8 mt-32  mx-8">
        {/* first slider */}
        <div className="w-full">
        <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>

        <div className="first-slide w-full">
          <div className=" w-full">  
            <div className="">
              <h3 className="text-2xl lg:text-3xl font-semibold">
                Our customer’s reviews
              </h3>
              <div className="mt-4">
                <img src={quote} alt="quote-image" />
              </div>
              <div className="flex gap-2 mt-4">
                <IoStar className="text-orange-500 w-6 h-6" />
                <IoStar className="text-orange-500 w-6 h-6" />
                <IoStar className="text-orange-500 w-6 h-6" />
                <IoStar className="text-orange-500 w-6 h-6" />
                <IoStar className="text-orange-500 w-6 h-6" />
              </div>
              <p className="mt-4">
                "I have been shopping with this web fashion site for over a year
                now and I can confidently say it is the best online fashion site
                out there.The shipping is always fast and the customer service
                team is friendly and helpful. I highly recommend this site to
                anyone looking for affordable clothing."
              </p>

              <p className="mt-4 font-bold hidden md:block">Robert smith</p>
              <div className=" inline-flex mt-4 md:hidden">
              <img src={aboutSlider1} alt="" className="w-20 h-20 "/>
              <p className="mt-4 font-bold ">Robert smith</p>
              </div>
            
            </div>
          </div>
        </div>

        <div className="second-slide ">
        <div className=" w-full">  
            <div className="">
              <h3 className="text-2xl lg:text-3xl font-semibold">
                Our customer’s reviews
              </h3>
              <div className="mt-4">
                <img src={quote} alt="quote-image" />
              </div>
              <div className="flex gap-2 mt-4">
                <IoStar className="text-orange-500 w-6 h-6" />
                <IoStar className="text-orange-500 w-6 h-6" />
                <IoStar className="text-orange-500 w-6 h-6" />
                <IoStar className="text-orange-500 w-6 h-6" />
                <IoStar className="text-orange-500 w-6 h-6" />
              </div>
              <p className="mt-4">
                "I have been shopping with this web fashion site for over a year
                now and I can confidently say it is the best online fashion site
                out there.The shipping is always fast and the customer service
                team is friendly and helpful. I highly recommend this site to
                anyone looking for affordable clothing."
              </p>

              <p className="mt-4 font-bold hidden md:block">Jenifer Unix</p>
              <div className=" inline-flex mt-4 md:hidden">
              <img src={aboutSlider2} alt="" className="w-20 h-20 "/>
              <p className="mt-4 font-bold">Jenifer Unix</p>
              </div>
              
            </div>
          </div>
        </div>
        
      </Slider>
        </div>

    {/* second slider */}
        <div className="hidden md:block">
        <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={1}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div className="">
          <div className="w-full ">
            <img src={aboutSlider1} alt="" className="w-full"/>
          </div>
        </div>

        <div>
        <div className="">
            <img src={aboutSlider2} alt="" />
          </div>
        </div>

      </Slider>
      
        </div>

     
        <div className=" mt-4">
                <span className="rounded-full">
                  <CiCircleChevLeft className="w-8 h-8 inline" />
                </span>
                <span className="rounded-full">
                  <CiCircleChevRight className="w-8 h-8 inline" />
                </span>
              </div>
    </div>
  );
}

export default CustomerReviewSlider;
