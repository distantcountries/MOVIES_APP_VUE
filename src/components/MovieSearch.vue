<template>
    <div style="margin: 2rem 0 2rem 2.6rem;">

        <form class="form-inline mr-auto" @submit.prevent="handleSearch">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model="term" >
            <button type="submit" class="btn btn-secondary">Search</button>
        </form>

        <!-- <input 
            class="form-control mr-sm-2" 
            type="text" 
            placeholder="Search" 
            aria-label="Search" 
            v-model="term"  
            v-on:input="handleSearch" 
        /> -->

    </div>
</template>

<script>
export default {
    props:['movie'],

    data() {
        return {
            term:'',
        }
    },

    methods: {
        handleSearch() {
            this.$emit('searchTermUpdated', this.term) //ne mora da se prosledjuje kao argument jer je term iz ovog objekta
        },
    }
}
</script>

<style>

</style>

