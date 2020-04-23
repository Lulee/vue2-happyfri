import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './components/pages/HomePage.vue'
import QuestionPage from './components/pages/QuestionPage.vue'
import ResultPage from './components/pages/ResultPage.vue'
import store from './store'
// import routers from "./router/router"

// window.console.log(routers)
Vue.use(VueRouter)
// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routers:routers
// })
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name:'homeLink',component: HomePage },
    { path: '/question',name:'questionLink', component: QuestionPage },
    { path: '/result', name:'resultLink',component: ResultPage },
    { path: "*", redirect: "/"}
  ]
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
