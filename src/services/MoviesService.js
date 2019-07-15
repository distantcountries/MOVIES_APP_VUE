import axios from 'axios'

export default class MoviesService {
    constructor() {
        axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
    }

    getAll() {
        return axios.get('movies')
    }

    // add(newMovie) { 
    //     // delete newMovie.id;
    //     return axios.post('movies', newMovie)

    // }

    // edit(newMovie) {
    //     return axios.put('movies/' + id, newMovie)
    // }

    // getMovie(index) {
    //     return axios.get('movies/' + index)
    // }
}

export const moviesService = new MoviesService()