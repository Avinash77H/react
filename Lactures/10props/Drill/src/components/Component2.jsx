import React from 'react'
import Component3 from './Component3'

function Component2({props}) {
  return (
    <>
        <h1>hello i am {props.data} from component2 </h1>
        <Component3 data={props}/>
    </>
  )
}

export default Component2