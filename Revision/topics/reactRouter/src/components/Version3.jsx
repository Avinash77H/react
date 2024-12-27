import React from 'react'
import { createBrowserRouter,RouterProvider,createRoutesFromChildren } from 'react-router-dom'

function Version3() {
    const route=createBrowserRouter(
        createRoutesFromChildren()
    )
  return (
    <div>
       
    </div>
  )
}

export default Version3