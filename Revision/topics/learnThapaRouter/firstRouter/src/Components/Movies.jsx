import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Card from './Card'

function Movies() {
  const data = useLoaderData()

  return (
    <div>
    <h1 className='header'>movies</h1>
    <ul className='grid grid-cols-3 gap-4 mt-4 px-4'>
      {data.Search.map((item)=><Card key={item.imdbID} item={item}/>)}
    </ul>
    <Outlet/>
    </div>
  )
}

export default Movies
