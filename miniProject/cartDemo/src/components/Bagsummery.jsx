import React from 'react'
import { useSelector } from 'react-redux'

function BagSummery() {
  const bagItems = useSelector((state)=>state.bag)
  const items = useSelector((state)=>state.item)
  const newItems = items.filter((item)=>{
    const itemIndex = bagItems.indexOf(item.id)
    return itemIndex >= 0 
  })
  let totalMrp = 0
  let totalDiscount = 0
  let totalAmount = 0
  
  newItems.forEach((item)=>{
    totalMrp += Math.ceil(item.price)
    totalDiscount += 2
    totalAmount = Math.ceil(totalMrp - totalDiscount)
  })
   
  return (
    <div className='border  p-4 flex flex-col gap-4'>
      <div className='font-semibold'>
        <h3>PRICE DETAILS ({newItems.length} Item)</h3>
      </div>
      <div className='flex justify-between'>
        <p>Total MRP</p>
        <p>${totalMrp}</p>
      </div>
      <div className='flex justify-between'>
        <p>Discount on Each Product</p>
        <p>- $2</p>
      </div>
      <div className='flex justify-between'>
        <p>Total Discount On MRP</p>
        <p className='text-green-500'>- ${totalDiscount}</p>
      </div>
      <hr />
      <div className='flex justify-between font-bold'>
        <h2>Total Amount</h2>
        <p>${totalAmount}</p>
      </div>
      <button className='place-items-start bg-pink-700 text-white py-2 '>PLACE ORDER</button>
    </div>
  )
}

export default BagSummery
