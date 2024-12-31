import React from 'react'
import { useParams,useLoaderData } from 'react-router-dom'

function Details() {
  const {id} = useParams()
  const details = useLoaderData();
  return (
    <div className='w-full'>
      <h1 className='header bg-violet-300 text-center'>Details{id}</h1>
      <p>{details.title}</p>
      <img src={details.thumbnail} alt=""/>
    </div>
  )
}

export async function fetchDetails({params}){
  const {id} = params;
  let api = "https://dummyjson.com/products/" + id;

  console.log("data:",api)
  
  const res =await fetch(api);
  const data =await res.json();
  return data;
}

export default Details