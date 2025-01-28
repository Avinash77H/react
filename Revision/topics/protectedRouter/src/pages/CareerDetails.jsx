import React from 'react'
import { useLoaderData} from 'react-router-dom'

function CareerDetails() {
 const data = useLoaderData();
 
  return (
    <div>
      <h1 className='header'>Career Details page</h1>
      <p>Id is: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>
    </div>
  )
}
export const CareerDetailsData = async({params})=>{
  const {id} = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if(!res.ok){
    throw Error("CareerDetailsData not Found");
  }

  return res.json();
}
export default CareerDetails
