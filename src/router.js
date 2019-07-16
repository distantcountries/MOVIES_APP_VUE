import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AppMovies from './components/AppMovies.vue'
import MovieRow from './components/MovieRow.vue'



Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            // redirect: '/movies',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/movies',
            name: 'movies',
            component: AppMovies
        },
        {
            path: '/movies/:id',
            name: 'singleMovie',
            component: MovieRow
        },
    ]
})