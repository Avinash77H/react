import React from "react";
import { MdArrowOutward } from "react-icons/md";
import defaultimg from "../assets/fashion.jpg";

function Card(props) {
  return (
    <div>
      <div className="border-2 border-green-500 relative">
        <img src={defaultimg} alt="image" className="w-1/4 " />
        <button className="hover:text-white hover:bg-black absolute bottom-7 left-5 p-2 duration-700">
          {props.name} <MdArrowOutward className="inline text-white duration-700"/>
        </button>
      </div>
    </div>
  );
}

export default Card;
