import React, { useState } from 'react'
import Component2 from './Component2'

function Component1() {
    const [data,setData] = useState("avinash")
    console.log(data)
  return (
    <>
        <h1>hello i am {data} from component 1 </h1>
        <Component2 data={data}/>
    </>
  )
}

export default Component1