const api = {
    key: "28de7213752144ee24f461ddb70b2501",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keycode ==13){
        //getResults(searchbox.value);
        console.log(searchbox.value);
    }
}