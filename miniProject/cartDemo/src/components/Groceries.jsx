import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

function Groceries() {
  const items = useSelector((state)=>state.item)
  const groceriesItems = items.filter((item)=>item.category === 'groceries')
  return (
    <div className='grid grid-cols-3 gap-8 gap-x-20 px-28'>
    {groceriesItems.map((item,index)=><Card key={index} item={item}/>)}
  </div>
  )
}

export default Groceries
