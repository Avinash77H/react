import React from "react";

function AddExpense() {
  return (
    <div className="flex justify-center mt-4 w-full">
      <div className="w-96 mx-auto bg-white p-8 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add Expense
        </h2>
        <form>
          {/* Amount Field */}
          <div className="mb-4">
            <label className=" text-gray-700 text-sm font-bold mb-2">
              Amount
            </label>
            <input
              type="number"
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
              required
            />
          </div>

          {/* Date Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
              rows="3"
              required
            />
          </div>

          {/* Select Card Bank Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Card/Bank
            </label>
            <select
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select a card/bank
              </option>
              <option value="Card 1">Card 1</option>
              <option value="Card 2">Card 2</option>
              <option value="Bank 1">Bank 1</option>
              <option value="Bank 2">Bank 2</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-1 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
