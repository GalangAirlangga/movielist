
let apiKey = "f16bd4a03a13585348aa3c90480205ad";
class DataMovie {
    static getMovieSearch(search) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&sort_by=popularity.desc&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results && responseJson.total_results > 0) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${search} is not found`)
                }
            })
    }
    static getMoviePopuler() {
        return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(` is not found`)
                }
            })
    }
    static getMovieTranding() {
        return fetch(`https://api.themoviedb.org/3/trending/all/day?include_adult=false&api_key=${apiKey}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(` is not found`)
                }
            })
    }
}

export default DataMovie;