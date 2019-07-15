<template>
    <div>
        <ul v-for="(movie, index) in movies" :key="index">
            <li>
                <span style="font-weight:bold;" class="list-group-item list-group-item-info">
                    <MovieRow :movie="movie"></MovieRow>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import MovieRow from './MovieRow'
import { moviesService } from '../services/MoviesService'
export default {
    components:{
        MovieRow
    },
    data() {
        return {
            movies:[],
            errors:[],
        }
    },

    // created() {
    //     moviesService.getAll()
    //     .then(response => {
    //         this.movies = response.data
    //     })
    //     .catch(e => {
    //         console.log(e)
    //     })
    // },

    beforeRouteEnter (to, from, next) {
        next(vm => {
            moviesService.getAll()
            .then(response => {
                vm.movies = response.data
            })
        })
    },

    methods: {

    }

}
</script>

<style>

</style>
