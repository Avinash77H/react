import React, { useState,useEffect } from 'react'
import axios from 'axios'

function Cards() {
  const[data,setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/profile")
    .then((res)=>{
      setData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <div>
       <div>
   { data.map((item)=>{
     return <ul key={item.id} className='mt-4'>
        <li>{item.name}</li>
        <li>{item.email}</li>
        <li>{item.phone}</li>
      </ul>
    })}
   </div>
    </div>
  )
}

export default Cards
