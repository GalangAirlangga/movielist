import './movie-item.js';

class MovieTrandingList extends HTMLElement {

    constructor() {
        super();

    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this.classList.add("grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-5", "gap-8");
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        })
    }

    renderError(message) {

        this.innerHTML = `<h2 id="not-found" class="text-4xl text-center font-medium">${message}</h2>`;
        this.classList.remove("grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-5", "gap-8");

    }
}

customElements.define("movie-tranding-list", MovieTrandingList);