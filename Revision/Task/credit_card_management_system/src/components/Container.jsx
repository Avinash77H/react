import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Container() {
  // toggle sidebar for mobile screen
  const [isSide, setIsSide] = useState(false);

  return (
    <div className="flex flex-col ">
      <Navbar setIsSide={setIsSide} />
      <div className="flex">
        <Sidebar isSide={isSide} />
          <Outlet />
      </div>
    </div>
  );
}

export default Container;
