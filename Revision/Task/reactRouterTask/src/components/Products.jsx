import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Products() {
  const data = useLoaderData()
  
  return (
    <div className=' w-full'>
      <h1 className='bg-violet-400 text-center text-white font-bold  py-2'>product page</h1>
      <div className='grid grid-cols-3'>
        {data.products.map((item)=><img src={item.
thumbnail} className='size-12'></img>)}
      </div>
    </div>
  )
}

export default Products

export async function fetchData(){
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}
