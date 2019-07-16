<template>
    <div>
        <div style="margin:0.5rem;">
            <button type="button" class="btn btn-light" style="margin:0.2rem;" @click="selectAllMovies" >Select All</button>
            <button type="button" class="btn btn-light" @click="deselectAllMovies">Deselect All</button>
        </div>
        <div>
            <button type="button" class="btn btn-outline-secondary" style="margin:0.2rem;">Sort by Name asc</button>
            <button type="button" class="btn btn-outline-secondary" style="margin:0.2rem;">Sort by Name desc</button>
            <button type="button" class="btn btn-outline-secondary" style="margin:0.2rem;">Sort by Duration asc</button>
            <button type="button" class="btn btn-outline-secondary" style="margin:0.2rem;">Sort by Duration desc</button>
        </div>

        <MovieSearch @searchTermUpdated="setSearchTerm" />
        <p>Selected movies: {{ selectedMovies.length }} </p>
        <ul >
            <li v-if="fillteredMovies.length === 0">
                 <span style="font-weight:bold;" class="list-group-item list-group-item-danger">There is no movie with this title.</span></li>
            <li v-for="(movie, index) in fillteredMovies" :key="index">
                <span style="font-weight:bold;" class="list-group-item list-group-item-info">
                    <MovieRow :movie="movie" @selectMovie="markSelektedMovie" :isSelected="isSelected(movie.id)" />
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import MovieRow from './MovieRow'
import MovieSearch from './MovieSearch'
import { moviesService } from '../services/MoviesService'
export default {
    components:{
        MovieRow,
        MovieSearch
    },
    data() {
        return {
            movies:[],
            errors:[],
            term:'',
            selectedMovies:[],

        }
    },

    beforeRouteEnter (to, from, next) {
        next(vm => {
            moviesService.getAll()
            .then(response => { vm.movies = response.data })
        })
    },

    methods: {
        setSearchTerm(term) {
            this.term = term;
        },

        markSelektedMovie(movieId) {
            console.log(movieId)
            if(this.isSelected(movieId)){
                return;
            }
            return this.selectedMovies.push(movieId);
        },

        isSelected(movieId) {
            return this.selectedMovies.includes(movieId);
        },

        selectAllMovies() {
            return this.selectedMovies = this.movies.map(movie => movie.id);
            // console.log(this.selectedMovies);
        },

        deselectAllMovies() {
            return this.selectedMovies = [];
            // console.log(this.selectedMovies);
        }
    },

    computed: {
        fillteredMovies() {
            return this.movies.filter(movie => {
                return movie.title.toLowerCase().includes(this.term.toLowerCase())
            })
        }
    },

}
</script>

<style>

</style>
