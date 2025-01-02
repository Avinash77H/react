async function GetMovieDataDetails({params}) {

  const id = params.id;

  const response = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=1c12799f&`
  );

  const data = response.json();
  return data;
}

export default GetMovieDataDetails;
