import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function DashBoard() {
  return (
    <>
      <div className="header">DashBoard</div>
      <SideBar />
    </>
  );
}

export default DashBoard;
