import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

function Beauty() {
  const items = useSelector((state)=>state.item)
  const beautyItems = items.filter((item)=>item.category === 'beauty')
  
  return (
    <div className='grid grid-cols-3 gap-8 gap-x-20 px-28'>
      {beautyItems.map((item)=><Card item={item}/>)}
    </div>
  )
}

export default Beauty
