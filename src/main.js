import Vue from 'vue'
import App from './App.vue'
import router from './router'

//1 - pre npm i bootstrap
import 'bootstrap'; //2
import 'bootstrap/dist/css/bootstrap.css'; //3
//4 -nakon toga npm install --save jquery popper.js

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')