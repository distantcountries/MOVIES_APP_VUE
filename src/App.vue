<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <div class="navbar-text navbar-brand" >
        <router-link to="/"  >Home</router-link> |
        <router-link to="/movies" >Movies</router-link>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
