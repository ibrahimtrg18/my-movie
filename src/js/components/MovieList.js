import "./MovieItem.js";

class MovieList extends HTMLElement {
    constructor() {
        super();
        this._movies = [];
    }

    connectedCallback() {
        this.render();
    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        this._movies.forEach((movie) => {
            const movieItem = document.createElement("movie-item");
            movieItem.movie = movie;
            this.appendChild(movieItem);
        });
    }
}

customElements.define("movie-list", MovieList);
