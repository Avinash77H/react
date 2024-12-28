import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'


function Career() {
  const data = useLoaderData();
  
  return (
    <>
      <div className='header'>Career</div>
     <div>
      <ul>

      {data.map((item)=>(
        <li key={item.id} className='underline'><Link to="/">{item.title}</Link></li>
      ))}
      </ul>
     </div>
    
    </>
  )
}

export async function CareerLoader(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  return response.json()
}

export default Career
