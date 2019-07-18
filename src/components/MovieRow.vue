<template>
    <div :class="{selected: isSelected}">
        <h3 style="padding-top:0.5rem;">{{movie.title}}</h3>
        <p>
            <span>Director: </span>{{movie.director}},
             <span>Duration: </span>{{movie.duration}} min,
             <span>Release Date: </span>{{movie.releaseDate}},
             <span>Genre: </span>{{movie.genre}}<br>
             <span>Img: </span><a href="#">{{movie.imageUrl}}</a>
        </p>
         <button type="button" style="margin-bottom:0.5rem;" class="btn btn-light" @click="handleSelect" v-if="isSelected===false">Select movie</button>
         <button type="button" style="margin-bottom:0.5rem;" class="btn btn-light" @click="handleSelect" v-if="isSelected===true">Deselect movie</button>


    </div>
</template>

<script>
export default {
    props:{
        movie: Object,
        isSelected: false,
    },

    methods: {
        handleSelect() {
            this.$emit('selectMovie', this.movie.id)
        }, 
    }, 
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


    .selected {
        background: #FEE9E9;
        border-radius: 2rem;
    }

</style>