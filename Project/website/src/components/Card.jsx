import React from "react";
import { MdArrowOutward } from "react-icons/md";
import defaultimg from "../assets/fashion.jpg";

function Card({details    

}) {
  return (
    <div>
      <div className="border-2 border-green-500 relative">
        <img src={details.image} alt="image" className="w-1/4 " />
        <button className="hover:text-white hover:bg-black absolute bottom-7 left-5 p-2 duration-700">
          {details.name} <MdArrowOutward className="inline text-white duration-700"/>
        </button>
      </div>
    </div>
  );
}

export default Card;
