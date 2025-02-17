import React from "react";

const CreateCard = () => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Card</h2>
        <form>
       <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Card Holder Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Card Holder Name"
              required
            />
          </div>

        <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Select Card/Bank
            </label>
            <select
              className="w-full px-3 py-1 border rounded-md block text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
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

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expire Date
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="MM/YY"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="123"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCard;
