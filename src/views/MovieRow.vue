<template>
    <div>
        <h5>Title: {{movie.title}}</h5>
        Director: {{movie.director}}
        Img: {{movie.imageUrl}}
        Duration: {{movie.duration}}
        Release Date: {{movie.releaseDate}}
        Genre:{{movie.genre}}
    </div>
</template>

<script>
import { moviesService } from '../services/MoviesService'
export default {
    props:['movie'],
    data(){
        return{
             movie: ''
        }
    }
}
</script>

