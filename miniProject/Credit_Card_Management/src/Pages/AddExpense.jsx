import React from 'react'

const AddExpense = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-96 mx-auto h-fit bg-[#D3F1DF] p-8 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Add Expense
        </h2>
        <form>
          {/* Amount Field */}
          <div className="mb-4">
            <label className=" text-sm font-bold mb-2">
              Amount
            </label>
            <input
              type="number"
              className="w-full px-3 py-1 border border-[#29c09d]  rounded-lg focus:outline-none focus:ring-[#3D8D7A] focus:border-[#3D8D7A]"
              placeholder="Enter amount"
              required
            />
          </div>

          {/* Date Field */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              className="w-full px-3 py-1 border border-[#29c09d]  rounded-lg focus:outline-none focus:ring-[#3D8D7A] focus:border-[#3D8D7A]"
              required
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              className="w-full px-3 py-1 border border-[#29c09d]  rounded-lg focus:outline-none focus:ring-[#3D8D7A] focus:border-[#3D8D7A]"
              placeholder="Enter description"
              rows="3"
              required
            />
          </div>

          {/* Select Card Bank Field */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">
              Select Card/Bank
            </label>
            <select
              className="w-full px-3 py-1 border border-[#29c09d]  rounded-lg focus:outline-none focus:ring-[#3D8D7A] focus:border-[#3D8D7A]"
              required
            >
              <option value="" disabled className='bg-[#D3F1DF]'>
                Select a card/bank
              </option>
              <option value="Card 1" className='bg-[#D3F1DF]'>Card 1</option>
              <option value="Card 2" className='bg-[#D3F1DF]'>Card 2</option>
              <option value="Bank 1" className='bg-[#D3F1DF]'>Bank 1</option>
              <option value="Bank 2" className='bg-[#D3F1DF]'>Bank 2</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-[#5A6C57] text-white px-4 py-2 rounded-lg hover:bg-[#525B44]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#3D8D7A] text-white px-4 py-2 rounded-lg hover:bg-[#578E7E]"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddExpense