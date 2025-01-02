import React from "react";
import { Outlet } from "react-router-dom";

function Products() {
  return (
    <div className=" w-full">
      <h1 className="bg-violet-400 text-center text-white font-bold py-2">
        product page
      </h1>

      <Outlet />
    </div>
  );
}

export default Products;
