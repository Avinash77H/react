import React from 'react'
import { useSelector } from 'react-redux'
import LikedCard from './LikedCard'
import {useNavigate } from 'react-router-dom'

function WhishList() {
  const items = useSelector((state)=>state.item)
  const likedItems = useSelector((state)=>state.like)
  const nevigate = useNavigate()
  const whishlistItems = items.filter((item)=>{
    const itemIndex = likedItems.indexOf(item.id)
    return itemIndex >= 0 // return true or false
  })
  const handleNevigateHome = ()=>{
    nevigate("/")
  }
  return (
   <>
    {likedItems.length > 0 ? <div className='grid grid-cols-3 gap-8 gap-x-20 px-28'>
      
     
      {whishlistItems.map((item,index)=><LikedCard key={index} item={item}/>)}
    </div>:<div className='py-48 flex justify-center items-center'>
    <div className='flex flex-col gap-2'>
        <p>No Item Please select item</p>
        <button className='bg-green-500 rounded-xl text-white' onClick={handleNevigateHome}>Go To Home</button>
      </div>
      </div>}
      </>
  
    
  )
}

export default WhishList
