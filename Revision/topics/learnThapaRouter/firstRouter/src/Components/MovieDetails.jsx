import React from 'react'
import { useLoaderData} from 'react-router-dom'
import MovieDetailsCard from './MovieDetailsCard';

function MovieDetails() {
  const data = useLoaderData();

  return (
    <div>
      <h1 className='header'>Movie Details</h1>
      <MovieDetailsCard item={data}/>
    </div>
  )
}

export default MovieDetails

