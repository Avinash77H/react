import React from 'react'
import {useLoaderData, useLocation  , Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


function  Products() {

  const data = useLoaderData();
  console.log(data);
  const location = useLocation()
  console.log(location)

  return (
    <div className=' w-full'>
      <h1 className='bg-violet-400 text-center text-white font-bold py-2'>product page</h1>
      <div className='grid grid-cols-3 gap-4 mt-2 px-4'>
       <ul>
       {data.products.map((item)=><Link key={item.id} to={`${item.id}`}><li className='underline'>{item.title}</li></Link>)}
       </ul>
      </div>
      <Outlet/>
    </div>
  )
}

export default Products


