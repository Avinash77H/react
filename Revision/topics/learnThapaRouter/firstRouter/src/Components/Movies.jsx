import React from 'react'
import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import Card from './Card'

function Movies() {
  const data = useLoaderData()

  return (
    <div className='mx-auto mt-4 shadow-lg flex flex-col items-center'>
    <h1 className='header w-full'>Movies</h1>
    <ul className='grid grid-cols-3 gap-4 mt-4 px-4'>
      {data.Search.map((item)=><NavLink to={`/movies/${item.imdbID}`} key={item.imdbID}><Card  item={item}/></NavLink>)}
    </ul>
    <Outlet/>
    </div>
  )
}

export default Movies
