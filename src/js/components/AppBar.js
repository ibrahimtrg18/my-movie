class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <h2 class="bg-blue-500 text-white px-3 py-2 font-bold text-3xl"> Movie Finder </h2>
        `;
    }
}

customElements.define("app-bar", AppBar);
