import React from 'react'

function ExpenseList() {
  return (
    <div className='mt-8'>

       {/* Total and Filter Section */}
       <div className="flex justify-between items-center">
          <p className="font-bold">
            Total: <span className="text-green-500">$50.00</span>
          </p>
          <div className="flex items-center gap-2">
            <label htmlFor="filter" className="font-bold">
              Filter by Category:
            </label>
            <select
              id="filter"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-300"
            >
              <option value="All">All</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

      {/* Expense List Section */}
      <table className="w-full text-left border-collapse mb-4 mt-8">
          <thead>
            <tr className="bg-green-200">
              <th className="border border-gray-300 p-2">Expense Name</th>
              <th className="border border-gray-300 p-2">Amount</th>
              <th className="border border-gray-300 p-2">Category</th>
              <th className="border border-gray-300 p-2">Date</th>
               <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Travel</td>
              <td className="border border-gray-300 p-2">$50.00</td>
              <td className="border border-gray-300 p-2">Transport</td>
              <td className="border border-gray-300 p-2">2024-07-21</td>
              <td className="border border-gray-300 p-2 flex gap-4">
                <button className="bg-blue-500 text-white rounded-lg px-2 py-1 hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white rounded-lg px-2 py-1 hover:bg-red-600 ">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        
    </div>
  )
}

export default ExpenseList
