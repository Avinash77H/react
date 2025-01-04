import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom';

function Information() {
  const data = useLoaderData()
  return (
 <>
    <div>
      <h1 className='header text-white'>This is information Page</h1>
    </div>
    <div>
      <ul>
        {data.products.map((item)=><NavLink key={item.id} to={`/details/${item.id}`}><li>{item.title}</li></NavLink>)}
      </ul>
    </div>
 </>
  )
}

export default Information;

export const fetchData = async()=>{
  const res = await fetch("https://dummyjson.com/products");
  return res.json()
}