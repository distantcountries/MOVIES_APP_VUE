import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'; //pre toga npm i bootstrap
import 'bootstrap/dist/css/bootstrap.css'; //nakon toga npm install --save jquery popper.js

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
