import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

function Fragrances() {
  const items = useSelector((state)=>state.item)
  const fragrancesItems = items.filter((item)=>item.category === 'fragrances')
  return (
    <div className='grid grid-cols-3 gap-8 gap-x-20 px-28'>
      {fragrancesItems.map((item,index)=><Card key={index} item={item}/>)}
    </div>
  )
}

export default Fragrances
