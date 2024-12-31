import React from 'react'
import {useLoaderData, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function  Products() {
  const {id} = useParams();
  const data = useLoaderData();
  
  return (
    <div className=' w-full'>
      <h1 className='bg-violet-400 text-center text-white font-bold  py-2'>product page{id}</h1>
      <div className='grid grid-cols-3 gap-4 mt-2 px-4'>
       <ul>
       {data.products.map((item)=><li key={item.id} className='underline'><Link to={`${item.id}`}>{item.title}</Link></li>)}
       </ul>
      </div>
    </div>
  )
}

export default Products

export async function fetchData(){
 
  const res = await fetch("https://dummyjson.com/products/" );
  return res.json();
}
