import React, { useEffect, useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { addInitialDAta } from "../redux/Actions";
import { addLike } from "../redux/Actions";

const Shop = () => {
  const [shop, setShop] = useState([]);
  const dispatch = useDispatch();

  async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setShop(data);
    dispatch(addInitialDAta(data));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-5 mx-auto">
      {shop.map((item, index) => (
        <div
          key={item.id}
          className="border border-black w-52 h-52 flex flex-col items-center"
        >
          <img src={item.image} className="h-36 w-36" alt="" />
          <p key={index} className="flex flex-wrap line-clamp-2">
            {item.title}
          </p>
          <button onClick={() => dispatch(addLike(item))}>
            <FcLikePlaceholder className="size-8" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
