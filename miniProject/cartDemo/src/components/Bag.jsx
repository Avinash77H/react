import React from 'react'
import { useSelector } from 'react-redux'
import BagCard from './BagCard'
import BagSummery from './BagSummery'
import { useNavigate } from 'react-router-dom'

function Bag() {
  const items = useSelector((state)=>state.item )
  const bagItems = useSelector((state)=>state.bag)
 const newItems = items.filter((item)=> {
  const itemIndex = bagItems.indexOf(item.id)
  return itemIndex >= 0
 })

 const nevigate = useNavigate()
  
  return (
    <>
    {
      newItems.length > 0 ? <div className='flex justify-around gap-4  mx-28'>
      <div className='w-1/2 grid grid-cols-1'>
        {newItems.map((item)=><BagCard item={item}/>)}
      </div>
      <div className='w-1/2'>
        <BagSummery/>
      </div>
    </div>: <div className='flex justify-center items-center py-40'>
    <div className='flex flex-col gap-4'>
      <p className='text-gray-500 text-2xl'>there are nothing in your bag</p>
      <button className='text-pink-600 border-2 border-pink-600 py-1 px-2 place-self-center' onClick={()=>nevigate("/whishlist")}>ADD ITEM FROM WHISHLIST</button>
    </div>
    </div>
    }
   
    
    </>
   
  )
}

export default Bag
