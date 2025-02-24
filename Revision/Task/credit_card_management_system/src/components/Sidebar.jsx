import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp ,IoIosCreate } from "react-icons/io";
import { MdCreateNewFolder } from "react-icons/md";

function Sidebar({isSide}) {

  console.log("isSide:",isSide);

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
      <div className={`${isSide ? 'max-sm:translate-x-0' : 'max-sm:-translate-x-full'} fixed sm:relative z-50 sm:visible h-screen w-36 lg:w-52 md:w-46 sm:w-36 text-sm bg-[#A9B5DF] text-gray-100 sm:flex flex-col shadow-lg transition-transform duration-600 ease-in-out`}>
        
        <nav className="flex flex-col p-2 md:p-4 space-y-2 ">
          <NavLink
            to="/home"
            className="w-full  hover:bg-[#7886C7] p-2 cursor-pointer rounded transition duration-200"
          >
            Home
          </NavLink>

          {/* DashBoard */}

          <div className="border-2 border-green-500">
            <div
              onClick={toggleDashBoard}
              className="p-1 md:p-2 cursor-pointer rounded transition duration-200 flex items-center gap-2 hover:bg-[#7886C7] hover:text-white"
            >
              Dashboard {isDashBoard ? <IoIosArrowUp className="text-xl"/> : <IoIosArrowDown className="text-xl"/>}
            </div>
            <div
              className={`flex flex-col space-y-2 transform transition-all duration-300 ease-in-out ${
                isDashBoard
                  ? "max-h-40 opacity-100 mt-2 "
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <NavLink
                to="dashboard/cardpage"
                className="p-2 rounded pl-4 transition duration-200  text-white hover:bg-[#7886C7] hover:text-white"
              >
                Cards
              </NavLink>
              <NavLink
                to="dashboard/history"
                className="p-2 rounded pl-4 transition duration-200  text-white hover:bg-[#7886C7] hover:text-white"
              >
                History
              </NavLink>
            </div>
          </div>

          {/* Manage Card */}

          <div>
            <div
              onClick={toggleManageCard}
              className="p-1 md:p-2 cursor-pointer rounded transition duration-200 flex items-center gap-2 hover:bg-[#7886C7] hover:text-white"
            >
              Manage Card {isManageCard ? <IoIosArrowUp className="text-xl"/> : <IoIosArrowDown className="text-xl"/>}
            </div>
            <div
              className={`flex flex-col space-y-2 transform transition-all duration-300 ease-in-out ${
                isManageCard
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <NavLink
                to="managecard/createcard"
                className="p-2 rounded pl-2 md:pl-4 transition duration-200  text-white hover:bg-[#7886C7] hover:text-white flex items-center gap-2"
              >
                Create Card <MdCreateNewFolder/>
              </NavLink>
              <NavLink
                to="managecard/modifycard"
                className="p-2 rounded pl-2 md:pl-4 transition duration-200  text-white hover:bg-[#7886C7] hover:text-white flex items-center gap-2"
              >
                Modify Card <IoIosCreate/>
              </NavLink>
            </div>
          </div>

          {/* add expense */}

          <NavLink
            to="/addExpense"
            className="hover:bg-[#7886C7] p-2 cursor-pointer rounded transition duration-200"
          >
            Add Expense
          </NavLink>
        </nav>
      </div>
  );
}

export default Sidebar;
