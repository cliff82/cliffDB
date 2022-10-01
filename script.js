const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=56581ee1f760ef44b355090c31d3907c&";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=56581ee1f760ef44b355090c31d3907c&query= ";

const main = document.getElementById('main');
const movieSection = document.getElementById('movie');
const search = document.getElementById ('search');



// initially get fav movies (by popularity)
getMovies(APIURL);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  console.log(respData);
  showMovies(respData.results);
}

async function getMovieById (id) {
  const resp = await fetch (
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=56581ee1f760ef44b355090c31d3907c&page=' + id
  );
  const respData = await resp.json ();
  const movie = respData.movie[0];
  console.log (movie);
  // return movie;
}

function showMovies(movies) {

  movieSection.innerHTML = ''; 

  movies.forEach(movie => {
    const { poster_path, title, vote_average, overview } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('col-4');

     

    movieEl.innerHTML = `
        <div class="card">
                  <img id="img"
                  src="${IMGPATH + poster_path}"
                  alt="${title}"/>
                
                <h3 id="title">${title}</h3>
                <span id="vote">${vote_average}</span>
                  <br>
                <h4 id="overview">${overview}</h4>
                
        </div>`;

        

    movieSection.appendChild(movieEl);
  });
}

form.addEventListener ('submit', e => { 
  e.preventDefault ();
  const searchTerm = search.value;
  if (searchTerm) { 
   getMovies(SEARCHAPI + searchTerm);
   // clear search term
   search.value = '';
  }
  });
