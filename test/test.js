const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzUzODc2NjQwMjIzNzhhNjM4ODY2MzVjMGFkOTczYyIsInN1YiI6IjY2NTFmZGE2YmYwNzI3ODAxMTk2MTIzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8a8WBCQn1cOzqHq5dBVuDrQmg4f_8ZFZH3KaD9KVnKw'
    }
  };
  



function shuffleArray(arr) {
    arr.sort(function (a, b) {
      return Math.random() - 0.5;
    });
    }
    
    


async function fetchDetails(){
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

let test = fetchDetails();
test.then((val)=>{
  shuffleArray(val);
  console.log(val)
  shuffleArray(val);
  console.log(val)


})

