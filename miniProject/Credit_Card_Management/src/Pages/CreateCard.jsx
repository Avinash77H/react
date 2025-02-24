import React from 'react'

const CreateCard = () => {
  return (
    <>
      <div className="max-w-md mx-auto bg-[#D3F1DF] shadow-lg rounded-lg p-6 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Card</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Cardholder's Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-[#29c09d] rounded-md shadow-sm focus:outline-none focus:ring-[#3D8D7A] focus:border-[#3D8D7A]"
              placeholder="Enter Card Holder Name"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-black">
              Select Card/Bank
            </label>
            <select
              className="w-full px-3 py-1 border rounded-md block text-sm font-medium text-black shadow-sm focus:outline-none focus:ring-[#3D8D7A] focus:border-[#3D8D7A] border-[#29c09d]"
              required
            >
              <option value="" disabled className='bg-[#D3F1DF] text-gray-700'>
                Select a cards/bank
              </option>
              <option value="Card 1" className='bg-[#D3F1DF]'>Card 1</option>
              <option value="Card 2" className='bg-[#D3F1DF]'>Card 2</option>
              <option value="Bank 1" className='bg-[#D3F1DF]'>Bank 1</option>
              <option value="Bank 2" className='bg-[#D3F1DF]'>Bank 2</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-black">
              Card Number
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-[#29c09d] rounded-md shadow-sm focus:outline-none focus:ring-[#3D8D7A] focus:border-[#3D8D7A]"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-black">
                Expire Date
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-[#29c09d] rounded-md shadow-sm focus:outline-none focus:ring-[#3D8D7A] focus:border-[#3D8D7A]"
                placeholder="MM/YY"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">
                CVV
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-[#29c09d] rounded-md shadow-sm focus:outline-none focus:ring-[#3D8D7A] focus:border-[#3D8D7A]"
                placeholder="123"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-[#5A6C57] text-white rounded-md hover:bg-[#525B44]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#3D8D7A] text-white rounded-md hover:bg-[#578E7E]"
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateCard

// hover:bg-[#4a8275]