import React from 'react'

function ExpenseItem() {
  return (
    <>
    {/* Input Section */}
    <div className="flex gap-2 mb-4">
    <input
      type="text"
      placeholder="Expense Name"
      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300"
    />
    <input
      type="number"
      placeholder="Amount"
      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300"
    />
    <select className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300">
      <option value="Food">Food</option>
      <option value="Transport">Transport</option>
      <option value="Other">Other</option>
    </select>
    <input
      type="date"
      className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300"
    />
    <button className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">
      Add Expense
    </button>
  </div>
  </>
  )
}

export default ExpenseItem