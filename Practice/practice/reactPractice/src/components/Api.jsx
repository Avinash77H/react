import React, { useEffect } from "react";
import { useState } from "react";

function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((res) => setData(res.recipes))
      .catch((err) => console.log(err));
  }, []);

  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div className="flex justify-center gap-4 mt-8">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-black"
        />
        <button className="py-2 px-4 bg-black text-white">search</button>
      </div>
      <div className="output my-8">
        {data.map((item) => {
          return  <div>
          {inputValue === item.name ? (
            
            <div className="flex flex-col items-center gap-2  border ">

              <img src={item.image} className="h-24 w-24 flex "></img>
               <p>{item.name}</p>
            </div>
          ) : (
            console.log('not found ')
          )}
        </div>
           
          
        })}
      </div>
      <div className=" mt-8">
        <h1 className="text-center text-4xl font-semibold">Recipes Dishes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  p-4 gap-x-8 gap-y-4 mt-8">
          {data.map((list, index) => {
            return (
              <div key={index}>
                <div className="border border-gray-400 p-4 flex flex-col gap-4 items-center">
                  <div className="w-28">
                    <img src={list.image} alt="" className="w-full" />
                  </div>
                  <p>{list.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Api;
