import React, { useEffect } from 'react'
import { useState } from 'react'

function Api() {
  const [data,setData] = useState([])
  useEffect(()=>{
      fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(res => setData(res.recipes))
      .catch(err => console.log(err))
  },[])
  return (
    <div>
      {data.map((list,index)=>{
        return <div>
          <p key={index}>{list.name}</p>
          <div className='w-28'>
            <img src={list.image} alt="" className='w-full'/>
          </div>
        </div>
      })}
    </div>
  )
}

export default Api
