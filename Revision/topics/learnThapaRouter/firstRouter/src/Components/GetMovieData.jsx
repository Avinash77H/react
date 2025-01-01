

async function GetMovieData() {
 const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=venom&page=2");
 const data = response.json()
 return data;
}

export default GetMovieData
