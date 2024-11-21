import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Clock() {
 
  const [dateTime,setDateTime] = useState("")




  useEffect(()=>{
    const interval =  setInterval(()=>{
    const now = new Date()
    const formateDate = now.toLocaleDateString()
    const formateTime = now.toLocaleTimeString()
    const newDateTime = `${formateDate}-${formateTime}`;
   
    // if(newDateTime !== dateTime){
    //   setDateTime(newDateTime)
    // }
    },1000)

    return (()=>clearInterval(interval))
  },[])
  // console.log('hey')
  return (
    <h2 className=''>{dateTime}</h2>
  )
}

export default Clock
