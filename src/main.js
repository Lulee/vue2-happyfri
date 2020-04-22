import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import store from './store'
import routers from "./router/router"


Vue.use(VueRouter)
const router = new VueRouter({
	routers
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
