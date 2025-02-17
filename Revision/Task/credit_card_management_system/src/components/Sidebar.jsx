import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp ,IoIosCreate } from "react-icons/io";
import { MdCreateNewFolder } from "react-icons/md";

function Sidebar() {

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
      <div className="h-screen w-64 bg-[#A9B5DF] text-gray-100 flex flex-col shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-[#7886C7]">Menu</h1>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <NavLink
            to="/home"
            className="hover:bg-[#7886C7] p-2 cursor-pointer rounded transition duration-200"
          >
            Home
          </NavLink>

          {/* DashBoard */}

          <div>
            <div
              onClick={toggleDashBoard}
              className="p-2 cursor-pointer rounded transition duration-200 flex items-center gap-2 hover:bg-[#7886C7] hover:text-white"
            >
              Dashboard {isDashBoard ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div
              className={`flex flex-col space-y-2 transform transition-all duration-300 ease-in-out ${
                isDashBoard
                  ? "max-h-40 opacity-100 mt-2"
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
              className="p-2 cursor-pointer rounded transition duration-200 flex items-center gap-2 hover:bg-[#7886C7] hover:text-white"
            >
              Manage Card {isManageCard ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
                className="p-2 rounded pl-4 transition duration-200  text-white hover:bg-[#7886C7] hover:text-white flex items-center gap-2"
              >
                Create Card <MdCreateNewFolder/>
              </NavLink>
              <NavLink
                to="managecard/modifycard"
                className="p-2 rounded pl-4 transition duration-200  text-white hover:bg-[#7886C7] hover:text-white flex items-center gap-2"
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
