
import '../component/movie-list';
import '../component/movie-populer-list';
import '../component/movie-tranding-list';
import '../component/search-bar.js';
import DataMovie from '../data/data-movie';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");
    const moviePopulerListElement = document.querySelector("movie-populer-list");
    const movieTrandingListElement = document.querySelector("movie-tranding-list");
    const onButtonSearchClicked = async () => {
        try{
            const result = await DataMovie.getMovieSearch(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };
    const renderResult =  results => {

        movieListElement.movies = results;
    };

    const fallbackResult = message => {

        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
    const getMoviesPopuler = async ()=>{
        try{
            const result = await DataMovie.getMoviePopuler();
            renderResultMovie(result);
        } catch (message) {
            fallbackResultMovie(message)
        }
    };
    const getMoviesTranding = async ()=>{
        try{
            const result = await DataMovie.getMovieTranding();
            renderResultMovieTranding(result);
        } catch (message) {
            fallbackResultMovieTranding(message)
        }
    };
    const renderResultMovie =  results => {
        moviePopulerListElement.movies = results;

    };

    const fallbackResultMovie = message => {
        moviePopulerListElement.renderError(message);
    };
    const renderResultMovieTranding =  results => {
        movieTrandingListElement.movies = results;

    };

    const fallbackResultMovieTranding = message => {
        movieTrandingListElement.renderError(message);
    };

    getMoviesPopuler().then();
    getMoviesTranding().then();

};

export default main;