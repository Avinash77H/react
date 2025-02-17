import React from 'react'

function ModifyCard() {
  return (
    <div className="w-96 mx-auto bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
      Update Expense
    </h2>
    <form >
      {/* Cardholder's Name Field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Cardholder's Name
        </label>
        <input
          type="text"
          
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter cardholder's name"
          required
        />
      </div>

      {/* Card Number Field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Card Number
        </label>
        <input
          type="text"
          
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter card number"
          required
        />
      </div>

      {/* Expire Date Field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Expire Date
        </label>
        <input
          type="month"
         
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* CVV Field */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          CVV
        </label>
        <input
          type="text"
          
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter CVV"
          maxLength="3"
          required
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
         
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update
        </button>
      </div>
    </form>
  </div>
  )
}

export default ModifyCard
