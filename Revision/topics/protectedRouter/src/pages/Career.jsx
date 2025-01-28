import React from 'react'
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';



function Career() {
  
  const data = useLoaderData();
  
  
  return (
    <>

      <h1 className='header'>Career page</h1> 
      <ul>
        {data.map((item)=>(
          <li key={item.id}><NavLink className="underline" to={`${item.id}`} >{item.id}.{item.title}</NavLink></li>
        ))}
      </ul>
      <Outlet/>
    
    </>
  )
}

export const CareerLoader = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if(!res.ok){
    throw Error("Data Not Found");
  }
  return res.json();
}

export default Career
