import React from 'react'
import { useLoaderData} from 'react-router-dom'
import MovieDetailsCard from './MovieDetailsCard';

function MovieDetails() {
  const data = useLoaderData();
  // const {id} = useParams();
  // const newData = data.Search.filter((item)=>item.imdbID.includes(id));
  return (
    <div>
      <h1 className='header'>Movie Details</h1>
      <MovieDetailsCard item={data}/>
    </div>
  )
}

export default MovieDetails

// export async function GEtMovieDataDetails(){
//   const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=venom&page=1");
//   const data = response.json()
//   return data;
// }
