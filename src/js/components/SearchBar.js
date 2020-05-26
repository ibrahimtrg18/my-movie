class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#search-text").value;
    }

    render() {
        this.innerHTML = `
            <div class="flex py-2">
                <div class="mx-auto">
                    <input class="border border-blue-700 border-b-1 rounded px-3 py-2" id="search-text" placeholder="search"></input>
                    <button id="search-button" class="bg-blue-500 text-white border border-blue-500 rounded px-3 py-2">Submit</button>
                </div>
            </div>
        `;
        this.querySelector("#search-button").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
