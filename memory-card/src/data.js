const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzUzODc2NjQwMjIzNzhhNjM4ODY2MzVjMGFkOTczYyIsInN1YiI6IjY2NTFmZGE2YmYwNzI3ODAxMTk2MTIzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8a8WBCQn1cOzqHq5dBVuDrQmg4f_8ZFZH3KaD9KVnKw'
    }
  };
  
const fetchDetails = async function fetchDetailsFromTMDBdatabase(){
  let response = await fetch('https://api.themoviedb.org/3/account/21289100/favorite/tv', options);
  let results = await response.json();
  let formattedData = results.results.map((value, index)=>{
    return {
            id : index,
            title:value.name, 
            img_src: `https://image.tmdb.org/t/p/w154${value.poster_path}`
          }
  })

  return formattedData;
}

export default fetchDetails;