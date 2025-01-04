import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

function Information2() {
  const data = useLoaderData();
  
  
  return (
   <>
    <div>
       <h1 className='header text-white'>This is information2 Page</h1>
    </div>
    <div>
      <img src={data.thumbnail} alt="" className='mx-auto'/>
    </div>
   </>
    
  )
}

export default Information2

export const fetchData2 = async({params})=>{
  const {id} = params

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json()
}