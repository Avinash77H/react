import React from 'react'
import { useContext } from 'react'
import{name,work} from './Component1'
const a = useContext(name);
const b = useContext(work);
function Component3() {


 
  return (
    <div>
      <h1>hello {a} ji</h1>
      <p>my work is {b}</p>
      
    </div>
  )
}

export default Component3
