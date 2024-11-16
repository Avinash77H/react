import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



function Home() {

  const data = useSelector((state)=>state.item)
  const dispatch = useDispatch()
  
  useEffect(()=>{
   fetch('https://dummyjson.com/products')
    .then((res)=>res.json())
    .then((data)=>data.products)
    .then((products)=>{
      products.map((product)=>dispatch(product))
    })
    // .then((data)=>dispatch(data.products))
    
   

    
    
  },[])
  console.log(data)

  return (
    <div >
    
    </div>
  )
}

export default Home
