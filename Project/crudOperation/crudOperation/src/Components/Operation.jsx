import React from "react";
import { FaSearch } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Operation() {
  return (
    <div classNameName="border border-red-500">
      <div className="p-8 border-2 border-green-500 ">
        <h1 className="p-4 text-4xl">Read Records</h1>
        <hr></hr>

        <div className="mt-4 flex justify-between items-center gap-8 flex-col md:flex-row">
          <div className="flex">
            <input
              type="text"
              placeholder="Type a name..."
              className="border-2 border-gray-300 rounded-s-md "
            ></input>
            <div className="bg-blue-500 py-2 px-3 rounded-e-md">
              <FaSearch className="inline text-white" />
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-red-500 py-1 px-2 rounded-md text-white font-semibold">
              <RxCrossCircled className="inline mr-2" />
              Delete Selected
            </button>
            <button className="bg-cyan-300 py-1 px-2 rounded-md text-white font-semibold">
              <IoArrowDownCircleOutline className="inline mr-2" />
              Export CSV
            </button>
            <button className="bg-blue-500 py-1 px-2 rounded-md text-white font-semibold">
              <FaPlus className="inline mr-2" />
              Create Record
            </button>
          </div>
        </div>

        <div className="table-container overflow-x-auto">
          <table className="border-collapse border border-black mt-8 w-full">
            <tr className="tableHeading text-nowrap">
              <th className="border border-black  chameli">
                <input type="checkbox" className="input-checkbox"></input>
              </th>
              <th className="border border-black">Name</th>
              <th className="border border-black">Description</th>
              <th className="border border-black">Prize</th>
              <th className="border border-black">Category</th>
              <th className="border border-black">Action</th>
            </tr>

            <tr className="text-nowrap">
              <td className="border border-black text-center">
                <input type="checkbox"></input>
              </td>
              <td className="border border-black text-center">Pillow</td>
              <td className="border border-black text-center">
                Sleeping well is important.
              </td>
              <td className="border border-black text-center">$8.99</td>
              <td className="border border-black text-center">Personal</td>
              <td className="border border-black">
                <button className="bg-blue-500 py-1 px-2 rounded-md text-white font-semibold mr-4">
                  <FaEdit className="inline mr-2" />
                  Edit
                </button>
                <button className="bg-red-500 py-1 px-2 rounded-md text-white font-semibold">
                  <ImCross className="inline mr-2" />
                  Delete
                </button>
              </td>
            </tr>

            <tr className="text-nowrap">
              <td className="border border-black text-center">
                <input type="checkbox"></input>
              </td>
              <td className="border border-black text-center">Earphone</td>
              <td className="border border-black text-center">
                You need this one if you love music.
              </td>
              <td className="border border-black text-center">$9.00 </td>
              <td className="border border-black text-center">Personal</td>
              <td className="border border-black">
                <button className="bg-blue-500 py-1 px-2 rounded-md text-white font-semibold mr-4">
                  <FaEdit className="inline mr-2" />
                  Edit
                </button>
                <button className="bg-red-500 py-1 px-2 rounded-md text-white font-semibold">
                  <ImCross className="inline mr-2" />
                  Delete
                </button>
              </td>
            </tr>

            <tr className="text-nowrap">
              <td className="border border-black  text-center">
                <input type="checkbox"></input>
              </td>
              <td className="border border-black text-center">Mouse</td>
              <td className="border border-black text-center">
                Very useful if you love your computer.
              </td>
              <td className="border border-black text-center">$11.35 </td>
              <td className="border border-black text-center">Personal</td>
              <td className="border border-black">
                <button className="bg-blue-500 py-1 px-2 rounded-md text-white font-semibold mr-4">
                  <FaEdit className="inline mr-2" />
                  Edit
                </button>
                <button className="bg-red-500 py-1 px-2 rounded-md text-white font-semibold">
                  <ImCross className="inline mr-2" />
                  Delete
                </button>
              </td>
            </tr>

            <tr className="text-nowrap">
              <td className="border border-black text-center">
                <input type="checkbox"></input>
              </td>
              <td className="border border-black text-center">Trash Can</td>
              <td className="border border-black text-center">
                It will help you maintain cleanliness.{" "}
              </td>
              <td className="border border-black text-center">$3.95</td>
              <td className="border border-black text-center">Sports</td>
              <td className="border border-black ">
                <button className="bg-blue-500 py-1 px-2 rounded-md text-white font-semibold mr-4">
                  <FaEdit className="inline mr-2" />
                  Edit
                </button>
                <button className="bg-red-500 py-1 px-2 rounded-md text-white font-semibold">
                  <ImCross className="inline mr-2" />
                  Delete
                </button>
              </td>
            </tr>

            <tr className="text-nowrap">
              <td className="border border-black text-center">
                <input type="checkbox"></input>
              </td>
              <td className="border border-black text-center">Eye Glasses </td>
              <td className="border border-black text-center">
                {" "}
                It will make you read better.
              </td>
              <td className="border border-black text-center">$6.00 </td>
              <td className="border border-black text-center">Sports</td>
              <td className="">
                <button className="bg-blue-500 py-1 px-2 rounded-md text-white font-semibold mr-4">
                  <FaEdit className="inline mr-2" />
                  Edit
                </button>
                <button className="bg-red-500 py-1 px-2 rounded-md text-white font-semibold">
                  <ImCross className="inline mr-2" />
                  Delete
                </button>
              </td>
            </tr>
          </table>
        </div>

        <div className="mt-4 flex justify-between flex-wrap gap-4">
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-blue-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                2
              </a>

              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>

          <div className="flex">
            <input
              type="text"
              placeholder="  Type page Number..."
              className="border-2 border-gray-300 rounded-s-md "
            ></input>
            <div className="bg-blue-500 py-2 px-3 rounded-e-md text-white font-semibold">
              Go
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operation;
