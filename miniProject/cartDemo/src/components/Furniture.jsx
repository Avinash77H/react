import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

function Furniture() {
  const items = useSelector((state)=>state.item)
  const furnitureItems = items.filter((item)=>item.category === 'furniture')
  return (
    <div className='grid grid-cols-3 gap-8 gap-x-20 px-28'>
    {furnitureItems.map((item,index)=><Card key={index} item={item}/>)}
  </div>
  )
}

export default Furniture
