var date = new Date();
const API_KEY = 'api_key=0795c53b9d20dfd0ea6888b1efa2d35d';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const RELEASE_DATE_URL = BASE_URL + '/discover/movie?primary_release_date.gte=' + date.getFullYear() + '-' + '0' + (date.getMonth() - 1) + '-' + date.getDate() + '&primary_release_date.lte=' + date.getFullYear() + '-' + '0' + date.getMonth() + '-' + date.getDate() + '&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

/*Elementos HTML*/
var carrossel_lancamentos = document.getElementById("testeAdd");
const inp = document.getElementById("inp");

getMovies(API_URL);
getReleaseMovies(RELEASE_DATE_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function getReleaseMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showReleaseMovies(data.results);
    })
}


function showReleaseMovies(data){
    console.log("data");
        document.getElementById("carrosel").innerHTML += `
        <div class="carousel-item active">
            <div class="container">
                <div class="row">
                <div class="col-6" id="dir"><img class="d-block" src="${IMG_URL + data[0].poster_path}" alt="First slide" width="280px"></div>
                <div class="col-6" id="esq"><h2><a href="/Portal-de-filmes-com-api/detalhes.html?id=${data[0].id}">${data[0].original_title}</a></h2>
                    <p>${data[0].overview}</p></div>
                </div>
            </div>
        </div>
        `
        for(i=1; i<data.length; i++){
            document.getElementById("carrosel").innerHTML += `
            <div class="carousel-item">
            <div class="container">
            <div class="row">
            <div class="col-6" id="dir"><img class="d-block" src="${IMG_URL + data[i].poster_path}" alt="First slide" width="280px"></div></a>
            <div class="col-6" id="esq"><h2><a href="/Portal-de-filmes-com-api/detalhes.html?id=${data[i].id}">${data[i].original_title}</a></h2>
                <p>${data[i].overview}</p></div>
            </div>
        </div>
            </div>
            `
        }
    console.log("data");
}


index = 8;
cont = 0;

function showMovies(data){
    if(cont >= 1){
        for(i = 8; i<index; i++){
            document.getElementById("testeAdd").innerHTML += `<div class="col-12 col-sm-6 col-lg-3" class="rmv"><img src="${IMG_URL+ data[i].poster_path}" alt="" width="100%"><a href="/Portal-de-filmes-com-api/detalhes.html?id=${data[i].id}">${data[i].original_title}</a></div>`
        }
    }else{
        for(i = 0; i<index; i++){
            document.getElementById("testeAdd").innerHTML += `<div class="col-12 col-sm-6 col-lg-3" class="rmv"><img src="${IMG_URL+ data[i].poster_path}" alt="" width="100%"><a href="/Portal-de-filmes-com-api/detalhes.html?id=${data[i].id}">${data[i].original_title}</a></div>`
            cont++;
        }
    }
}

document.getElementById("loadMore").addEventListener('click', () => {
    index = 20;
    getMovies(API_URL);
    document.getElementById("loadMore").style.display = "none";
})

inp.addEventListener('input', () => {
    document.getElementById("buscar").href = "/Portal-de-filmes-com-api/busca.html?querie="+inp.value;
})
