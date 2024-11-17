import React from 'react'
import { useEffect, useState } from 'react'

function WindowSize() {
  const [resize,setResize] = useState(window.innerWidth)
  const handleResize = ()=>{
    setResize(window.innerWidth)
  }
  useEffect(()=>{
    console.log('event added')
    window.addEventListener('resize',handleResize)

    return ()=> {
      console.log('event remove')
      window.removeEventListener('resize',handleResize)
    }
  },[])
  return (
    <div>
      window size:{resize}
    </div>
  )
}

export default WindowSize
