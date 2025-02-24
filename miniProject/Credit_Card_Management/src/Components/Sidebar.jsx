import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp, IoIosCreate } from "react-icons/io";
import { MdCreateNewFolder } from "react-icons/md";


function Sidebar({ isSide }) {

  /* DashBoard */
  const [isDashBoard, setIsDashBoard] = useState(false);

  const toggleDashBoard = () => {
    setIsDashBoard(!isDashBoard);
  };

  /* Manage Card */
  const [isManageCard, setIsManageCard] = useState(false);

  const toggleManageCard = () => {
    setIsManageCard(!isManageCard);
  };

  return (
    <div className={`${isSide?"max-sm:translate-x-0" : "max-sm:-translate-x-full"} fixed sm:relative z-50 p-3 sm:p-4 text-sm bg-[#A3D1C6] sm:flex flex-col shadow-lg  transition-transform duration-600 ease-in-out `}>

      <nav className="flex flex-col">
        <NavLink
          to="/home"
          className="hover:bg-[#3D8D7A] w-32 md:w-36 lg:w-40 p-2 cursor-pointer rounded transition duration-200 hover:text-white"
        >
          Home
        </NavLink>

        {/* DashBoard */}
        <div>
          <div
            onClick={toggleDashBoard}
            className="cursor-pointer rounded transition duration-200 flex gap-x-2 items-center hover:bg-[#3D8D7A] hover:text-white  w-32 md:w-36 lg:w-40 p-2 mt-3 sm:mt-4"
          >
            Dashboard {isDashBoard ? <IoIosArrowUp className="text-xl sm:text-lg " /> : <IoIosArrowDown className="text-xl sm:text-lg " />}
          </div>
          <div
            className={` flex flex-col transform transition-all duration-300 ease-in-out ${isDashBoard
              ? "max-h-40 opacity-100 mt-2"
              : "max-h-0 opacity-0"
              } overflow-hidden`}
          >
            <NavLink
              to="dashboard/cardpage"
              className="rounded transition duration-200 p-2 m-1.5  hover:bg-[#3D8D7A] hover:text-white"
            >
              Cards
            </NavLink>
            <NavLink
              to="dashboard/history"
              className="rounded transition duration-200 p-2 m-1.5  hover:bg-[#3D8D7A] hover:text-white"
            >
              History
            </NavLink>
          </div>
        </div>

        {/* Manage Card */}
        <div>
          <div
            onClick={toggleManageCard}
            className="cursor-pointer rounded transition duration-200 flex gap-x-2 items-center hover:bg-[#3D8D7A] hover:text-white  w-32 md:w-36 lg:w-40 p-2 mt-2 sm:mt-3"
          >
            ManageCard {isManageCard ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />}
          </div>
          <div
            className={` flex flex-col  transform transition-all duration-300 ease-in-out  ${isManageCard
              ? "max-h-40 opacity-100 mt-2"
              : "max-h-0 opacity-0"
              } overflow-hidden`}
          >
            <NavLink
              to="managecard/createcard"
              className="rounded transition duration-200 p-2 m-2 sm:mt-2  hover:bg-[#3D8D7A] hover:text-white flex items-center gap-x-1.5"
            >
              Create Card <MdCreateNewFolder className="text-2xl sm:text-lg" />
            </NavLink>
            <NavLink
              to="managecard/modifycard"
              className="rounded transition duration-200 p-2 m-2 sm:mt-2  hover:bg-[#3D8D7A] hover:text-white flex items-center gap-x-1.5"
            >
              Modify Card <IoIosCreate className="text-2xl sm:text-lg" />
            </NavLink>
          </div>
        </div>

        {/* Add expense */}
        <NavLink
          to="/addExpense"
          className="hover:bg-[#3D8D7A] w-32 md:w-36 lg:w-40 p-2 mt-2 sm:mt-3 cursor-pointer rounded transition duration-200 hover:text-white"
        >
          Add Expense
        </NavLink>

      </nav>
    </div>
  );
}

export default Sidebar;