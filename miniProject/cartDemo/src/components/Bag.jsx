import React from 'react'
import { useSelector } from 'react-redux'
import LikedCard from './LikedCard'

function Bag() {
  const items = useSelector((state)=>state.item )
  const bagItems = useSelector((state)=>state.bag) // 1,3
 const newItems = items.filter((item)=> {
  const itemIndex = bagItems.indexOf(item.id)
  return itemIndex >= 0
 })
 console.log(items.length)
 console.log(bagItems)
  console.log(newItems.length)
  return (
    <div className='flex gap-4 border-2 border-black mx-28'>
      <div className='w-1/3 grid grid-cols-1'>
        {newItems.map((item)=><LikedCard item={item}/>)}
      </div>
      <div className='w-1/4'>
      </div>
    </div>
  )
}

export default Bag
