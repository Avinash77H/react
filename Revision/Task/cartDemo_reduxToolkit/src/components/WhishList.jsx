import React from "react";
import { FcLike } from "react-icons/fc";
import { useSelector } from "react-redux";

const WhishList = () => {
  const likedItem = useSelector((state) => state.add_like);
  return (
    <div className="grid grid-cols-5 gap-5 mx-auto">
      {likedItem.length !== 0 ? (
        likedItem.map((item, index) => (
          <div
            key={item.id}
            className="border border-black w-52 h-52 flex flex-col items-center"
          >
            <img src={item.image} className="h-36 w-36" alt="" />
            <p key={index} className="flex flex-wrap line-clamp-2">
              {item.title}
            </p>
            <button onClick={() => dispatch(addLike(item))}>
              <FcLike className="size-8" />
            </button>
          </div>
        ))
      ) : (
        <div >No Liked Item </div>
      )}
    </div>
  );
};

export default WhishList;
