<template>
    <div>
        <h3>{{movie.title}}</h3>
        <p>
            <span>Director: </span>{{movie.director}}<br>
             <span>Img: </span>{{movie.imageUrl}}<br>
             <span>Duration: </span>{{movie.duration}}<br>
             <span>Release Date: </span>{{movie.releaseDate}}<br>
             <span>Genre: </span>{{movie.genre}}
        </p>
         <button type="button" class="btn btn-light" @click="handleSelect">Select movie</button>
    </div>
</template>

<script>
export default {
    props:{
        movie: Object,
        isSelected: Boolean,
    },

    methods: {
        handleSelect() {
            this.$emit('selectMovie', this.movie.id)
        },

        handleSellectAll() {

        }
    }
}
</script>

<style>
    p {
        font-size: 1rem;
    }

    h3 {
        color:#922B21;
    }

    p span {
        color:#6C7A89
    }

</style>
