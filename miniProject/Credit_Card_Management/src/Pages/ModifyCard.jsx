import React from 'react'
import { IoSearch } from "react-icons/io5";
import CardView from '../Components/CardView';

const ModifyCard = () => {
  return (
    <div className=''>
      {/* search bar */}
      <div className='flex justify-center w-full mt-5'>
        <div className='inline-block border-2 border-black rounded '>
          <input type="text" className='outline-none pl-1' placeholder='Enter Card Number' />
          <button className='border-l-2 border-l-black p-1.5 bg-[#578E7E] text-white'><IoSearch /></button>
        </div>
      </div>

      <div className='mt-10 flex-col gap-2 space-y-4'>

        <div className='border-2 border-black'>
          <CardView />
        </div>
    
        {/* Update Form */}
        <div className=' border-2 border-black'>
        <div className="w-72 sm:w-80  mb-5 h-fit  mx-auto bg-[#D3F1DF] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Update Expense
          </h2>
          <form >
            {/* Cardholder's Name Field */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Cardholder's Name
              </label>
              <input
                type="text"

                className="w-full px-3 py-2 border rounded-lg border-[#29c09d] focus:outline-none focus:ring-[#3D8D7A] focus:border-[#3D8D7A]"
                placeholder="Enter cardholder's name"
                required
              />
            </div>

            {/* Card Number Field */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Card Number
              </label>
              <input
                type="text"

                className="w-full px-3 py-2 border  border-[#29c09d] rounded-lg focus:outline-none focus:ring-[#3D8D7A] focus:border-[#3D8D7A]"
                placeholder="Enter card number"
                required
              />
            </div>

            {/* Expire Date Field */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Expire Date
              </label>
              <input
                type="month"
                className="w-full px-3 py-2 border border-[#29c09d] rounded-lg focus:outline-none focus:ring-[#3D8D7A] focus:border-[#3D8D7A]"
                required
              />
            </div>

            {/* CVV Field */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">
                CVV
              </label>
              <input
                type="text"

                className="w-full px-3 py-2 border border-[#29c09d] rounded-lg focus:outline-none focus:ring-[#3D8D7A] focus:border-[#3D8D7A]"
                placeholder="Enter CVV"
                maxLength="3"
                required
              />
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
                Update
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ModifyCard