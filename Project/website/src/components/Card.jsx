import React from "react";
import { MdArrowOutward } from "react-icons/md";


function Card({details}) {
  return (
    <div>
      <div className="relative mr-4">
        <img src={details.image} alt="image" className=""/>
        <button className="hover:text-white hover:bg-black absolute bottom-7 left-5 p-2 duration-700">
          {details.name}<MdArrowOutward className="inline text-white duration-700"/>
        </button>
      </div>
    </div>
  );
}

export default Card;
