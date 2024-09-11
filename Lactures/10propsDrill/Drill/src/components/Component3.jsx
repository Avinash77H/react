import React, { useContext } from 'react'
import{data,data1} from '../App'

function Component3() {

  const name = useContext(data);
  const gender = useContext(data1)
  return (
    <div>
      <h1>hello {name} ji</h1>
      <p>my gender is {gender}</p>
      
    </div>
  )
}

export default Component3
