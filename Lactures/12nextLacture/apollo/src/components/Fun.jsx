import React, { useState } from 'react'

function Fun({fun}) {
  
    return (
  <>
    <h1>this is fun component</h1>
    <p>{fun()}</p>
    {/* <button onClick={fun}>click me</button> */}
  </>
  )
}

export default Fun
