import React from "react";
import { MdArrowOutward } from "react-icons/md";


function Card({details}) {
  return (

      <div className="relative mr-4">
        <img src={details.image} alt="image" className="rounded-xl"/>
        <div className="absolute bottom-1 left-1 md:bottom-5 md:left-3 flex items-center gap-2 bg-white px-2 py-1 lg:px-4 lg:py-2 hover:!bg-black group duration-300 hover:duration-300">
          <p className="group-hover:text-white text-sm md:text-xl"> {details.name}</p>
          <span><MdArrowOutward className="hidden duration-700 text-white group-hover:block"/></span>
        </div>
      </div>
  
  );
}

export default Card;
