const urlParams = new URLSearchParams(window.location.search);
const nomeParam = urlParams.get("querie");
const API_KEY = 'api_key=0795c53b9d20dfd0ea6888b1efa2d35d';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
const API_URL = BASE_URL + API_KEY + '&query=' + nomeParam;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

//https://api.themoviedb.org/3/search/movie?api_key=0795c53b9d20dfd0ea6888b1efa2d35d&language=en-US&query=beasts&page=1&include_adult=false

getMovies(API_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    for(i = 0; i<data.length; i++){
        document.getElementById("resultados").innerHTML += `<a href="/detalhes.html?id=${data[i].id}"><div id="resultado">
        <img src="${IMG_URL+ data[i].poster_path}" alt="" width="200px">
        <div>
            <h2>${data[i].original_title}</h2>
            <p>${data[i].overview}</p>
        </div>
    </div></a>`
    }
}

inp.addEventListener('input', () => {
    document.getElementById("buscar").href = "/busca.html?querie="+inp.value;
})

console.log(nomeParam);