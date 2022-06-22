const urlParams = new URLSearchParams(window.location.search);
const nomeParam = urlParams.get("id");
const API_KEY = 'api_key=0795c53b9d20dfd0ea6888b1efa2d35d';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_URL = BASE_URL + nomeParam +'?'+ API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

//https://api.themoviedb.org/3/search/movie?api_key=0795c53b9d20dfd0ea6888b1efa2d35d&language=en-US&query=beasts&page=1&include_adult=false

getMovies(API_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data);
    })
}

function showMovies(data){
        document.getElementById("resultados").innerHTML += `<div id="resultado">
        <img src="${IMG_URL+ data.poster_path}" alt="" width="400px">
        <div id="info">
            <div class="row" id="linha">
                
            </div>
            <h2>${data.title}</h2>
            <p>Data de lançamento: ${data.release_date  }</p>
            <p>${data.overview}</p>
            <p>Nota: ${data.vote_average}</p>
        </div>`


       for(i=0; i< data.genres.length; i++){
            document.getElementById("linha").innerHTML += `<div class="col-4 categoria">
            <p class="card-text"><small class="text-muted">${data.genres[i].name}</small></p>
            </div>`
        }
}

inp.addEventListener('input', () => {
    document.getElementById("buscar").href = "/Portal-de-filmes-com-api/busca.html?querie="+inp.value;
})
