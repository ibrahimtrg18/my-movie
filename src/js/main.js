import "./components/AppBar.js";
import "./components/SearchBar.js";
import "./components/MovieList.js";

const main = () => {
    const baseURL = "https://api.themoviedb.org/3/search/movie?api_key=7bfb36ab5733539def281ef660dd0b45";
    const searchBar = document.querySelector("search-bar");
    const movieList = document.querySelector("movie-list");
    searchBar.className = "px-3 py-1";
    movieList.className = "grid gap-6 grid-cols-3";

    const onButtonSearchClicked = async () => {
        try {
            const xhr = new XMLHttpRequest();

            xhr.onload = function () {
                console.log(JSON.parse(this.responseText));
                const responseJSON = JSON.parse(this.responseText);
                if (responseJSON.results && responseJSON.results) {
                    movieList.movies = responseJSON.results;
                }
            };

            xhr.onerror = function () {
                console.log("error");
            };

            xhr.onloadend = function () {
                if (xhr.status >= 400) {
                    movieList.innerHTML = "SEARCH TEXT TIDAK BOLEH KOSONG!";
                }
            };

            xhr.open("GET", `${baseURL}&query=${searchBar.value}`);
            xhr.send();
        } catch (err) {
            console.log("error");
        }
    };

    searchBar.clickEvent = onButtonSearchClicked;
};

export default main;
