<template>
    <div>
        <div style="margin:0.5rem;">
            <button type="button" class="btn btn-light" style="margin:0.2rem;" @click="selectAllMovies" >Select All</button>
            <button type="button" class="btn btn-light" @click="deselectAllMovies">Deselect All</button>
        </div>
        <div>
            <button type="button" class="btn btn-outline-secondary" style="margin:0.2rem;" @click="sortByNameAsc">Sort by Name asc</button>
            <button type="button" class="btn btn-outline-secondary" style="margin:0.2rem;" @click="sortByNameDesc">Sort by Name desc</button>
            <button type="button" class="btn btn-outline-secondary" style="margin:0.2rem;" @click="sortByDurationAsc">Sort by Duration asc</button>
            <button type="button" class="btn btn-outline-secondary" style="margin:0.2rem;" @click="sortByDurationDesc">Sort by Duration desc</button>
        </div>

        <MovieSearch @searchTermUpdated="setSearchTerm" />
        <p>Selected movies: {{ selectedMovies.length }} </p>
        <ol >
            <li v-if="fillteredMovies.length === 0">
                <span style="font-weight:bold;" class="list-group-item list-group-item-danger">There is no movie with this title.</span></li>
            <li v-for="(movie, index) in fillteredMovies" :key="index">
                <MovieRow :movie="movie" @selectMovie="markSelektedMovie" :isSelected="isSelected(movie.id)" />
                <hr>
            </li>
        </ol>

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
            pageNumber: 0
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

        markSelektedMovie(movieId, index) {
            if(this.isSelected(movieId)){
                var index = this.selectedMovies.filter(movie => { return movieId; }).indexOf(movieId);
                return this.selectedMovies.splice(index, 1);
            } if(! this.isSelected(movieId)){
                return this.selectedMovies.push(movieId);
            }
        },

        isSelected(movieId) {
            return this.selectedMovies.includes(movieId);
        },

        selectAllMovies() {
            return this.selectedMovies = this.movies.map(movie => movie.id);
        },

        deselectAllMovies() {
            return this.selectedMovies = [];
        },

        sortByNameAsc() {
            this.movies.sort((movie1, movie2) => {
                var title1 = movie1.title.toUpperCase(); // ignore upper and lowercase
                var title2 = movie2.title.toUpperCase(); 
                if (title1 < title2) {
                    return -1;
                }
                if (title1 > title2) {
                    return 1;
                }
                return 0;
            });
        },

        sortByNameDesc() {
            this.movies.sort((movie1, movie2) => {
                var title1 = movie1.title.toUpperCase(); // ignore upper and lowercase
                var title2 = movie2.title.toUpperCase(); 
                if (title2 < title1) {
                    return -1;
                }
                if (title2 > title1) {
                    return 1;
                }
                return 0;
            });
        },

        sortByDurationAsc() {
            this.movies.sort((movie1, movie2) => { 
                return movie1.duration - movie2.duration 
            });
        },

        sortByDurationDesc() {
            this.movies.sort((movie1, movie2) => { 
                return movie2.duration - movie1.duration 
            });
        },
    },

    computed: {
        fillteredMovies() {
            return this.movies.filter(movie => {
                return movie.title.toLowerCase().includes(this.term.toLowerCase())
            })
        }, 
    },

}
</script>

<style>

</style>
