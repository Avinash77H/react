import React from 'react'
import { useParams,useLoaderData } from 'react-router-dom'

function Details() {
  const {id} = useParams()
  const details = useLoaderData();
  return (
    <div className='w-full'>
      <h1 className='header bg-violet-300 text-center'>Details</h1>
      <p>{details.title}</p>
      <img src={details.thumbnail} alt=""/>
    </div>
  )
}

export async function fetchDetails({id}){
  
  const res =await fetch("https://dummyjson.com/products/" + id);
  const data =await res.json();
  return data;
}

export default Details