const baseURl = "https://www.omdbapi.com/?apikey=b17b6509&t=";
const searchTerm = document.querySelector(".search");
const submitForm = document.querySelector('.submit');
const searchForm = document.querySelector('form');
const section = document.querySelector('section');
let url;

searchForm.addEventListener('submit', fetchResults);


function fetchResults(e) {
    e.preventDefault();
    url = baseURl + searchTerm.value;
    console.log("URL:", url);


    fetch(url)
        .then(function (result) {
            return result.json();
        }).then(function (json) {
            displayResults(json);
        });
}

function displayResults(results){
    console.log(results)
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let title = document.createElement('h2');
    let year = document.createElement('p');
    let actors = document.createElement('p');
    let plot = document.createElement('p');
    let img = document.createElement('img');

    title.textContent = results.Title;
    year.textContent = results.Year;
    actors.textContent = results.Actors;
    img.src = results.Poster;
    plot.textContent = results.Plot;
    plot.className= 'plot'
    
    section.appendChild(title);
    section.appendChild(year);
    section.appendChild(actors);
    section.appendChild(plot);
    section.appendChild(img);
    
    // if('p'=any) {
    //     .style.backgroundColor = "white";
    // } else {
    //     .style.backgroundColor = null;
    // }
    

}