import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../store/bagSlice'

function BagCard({item}) {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col gap-2 px-16 py-2 border border-gray-300 relative'>
        <div className='absolute right-8 top-4 text-3xl cursor-pointer' onClick={()=>dispatch(removeItem(item.id))}>X</div>
        <img src={item.images} alt="" className='size-44'/>
        
         <p>{item.category}</p>
         <p>${item.price}</p>
         <div className='flex gap-1'>
            {item.tags.map((tag,index)=><span key={index}>#{tag}</span>)}
         </div>
         <div>
        
         </div>
    </div>
  )
}

export default BagCard
