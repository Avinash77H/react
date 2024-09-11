import React from 'react'
import { data1,data2 } from '../App'

function Ex2() {
  return (
    <data1.Consumer>
        {
            (item)=>(
                <h1>value:{item}</h1>
                )
        }
    </data1.Consumer>
  )
}

export default Ex2