import React from "react";
import { MdArrowOutward } from "react-icons/md";


function Card({details}) {
  return (

      <div className="relative mr-4  ">
        <img src={details.image} alt="image" className="rounded-xl"/>
        <div className="absolute bottom-5 left-3 flex items-center gap-2 bg-white px-4 py-2 hover:!bg-black group duration-300 hover:duration-300">
          <p className="group-hover:text-white "> {details.name}</p>
          <span><MdArrowOutward className="hidden duration-700 text-white group-hover:block"/></span>
        </div>
      </div>
  
  );
}

export default Card;
