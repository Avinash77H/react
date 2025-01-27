import React, { useState, useEffect, useRef } from "react";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";

function Scrolling() {
  const images = [img1, img2, img3];
  const imageIndex = useRef(0);
  const imageElement = useRef(null);
  const [active, setActive] = useState(false);

  function handleClick(index) {
    imageIndex.current = index;
    setActive(true);
  }

  useEffect(() => {
    imageElement.current.classList.add("anime");
    const id = setTimeout(() => {
      imageElement.current.classList.remove("anime");
      setActive(false);
    }, 500);
    return () => clearInterval(id);
  }, [active]);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" flex flex-col gap-2">
        <div className={`border-2 border-black overflow-hidden `}>
          <img
            ref={imageElement}
            src={images[imageIndex.current]}
            className={`w-80 h-80 object-cover`}
          ></img>
        </div>
        <div className="flex gap-2 justify-center">
          <div
            className="bg-black rounded-full p-1"
            onClick={() => handleClick(0)}
          ></div>
          <div
            className="bg-black rounded-full p-1"
            onClick={() => handleClick(1)}
          ></div>
          <div
            className="bg-black rounded-full p-1"
            onClick={() => handleClick(2)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Scrolling;
