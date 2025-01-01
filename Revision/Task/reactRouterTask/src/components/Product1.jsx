import React from 'react'
import { useParams } from 'react-router-dom';




function Product1() {
    const data = useParams();
  return (
    <div>
      <h1>Product1 page</h1>
      <div>
      <ul>
       {data.products.map((item)=><Link key={item.id} to={`${item.id}`}><li className='underline'>{item.title}</li></Link>)}
       </ul>
      </div>
    </div>
  )
}

export default Product1

export async function fetchData(){
    const res = await fetch("https://dummyjson.com/products/" );
    return res.json();
  }