class MovieItem extends HTMLElement {
    connectionCallback() {
        this.render();
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" class="w-full"></img>
                <div class="font-bold text-purple-500 sm:text-xl mx-3 my-1 sm:truncate">${this._movie.title}</div>
                <div class="px-3 py-2 list-none hidden md:block lg:block xl:block">
                    <li class="mb-2">
                        <div class="inline-block font-bold">Release: </div>
                        <div class="inline-block bg-gray-200 text-gray-700 font-semibold text-sm rounded-full px-3 py-2">
                            ${this._movie.release_date}
                        </div>
                    </li>
                    <li>
                        <div class="inline-block font-bold">Popularity: </div>
                        <div class="inline-block bg-gray-200 text-gray-700 font-semibold text-sm rounded-full px-3 py-2">
                            ${this._movie.popularity}
                        </div>
                    </li>
                </div>
            </div>
        `;
    }
}

customElements.define("movie-item", MovieItem);
