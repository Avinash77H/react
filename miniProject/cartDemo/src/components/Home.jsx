import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInitialItem } from '../store/itemSlice'
import Card from './Card'

function Home() {
  const data = useSelector((state)=>state.item)
  const dispatch = useDispatch()
  
  useEffect(()=>{

  //  fetch('https://dummyjson.com/products') 
  //   .then((res)=>res.json())
  //   .then((data)=>dispatch(addInitialItem(data.products)))

  const fetchData =  async()=>{
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    dispatch(addInitialItem(data.products))
  }

  fetchData()

  },[])

  return (
    <div className='grid grid-cols-3 gap-8 gap-x-20 px-28'>
     {data.map((item)=><Card key={item.id} item={item}/>)}
    </div>
  )
}

export default Home
