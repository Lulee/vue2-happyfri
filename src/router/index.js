/**
 * 配置项目页面路由，使用history模式
 * Created by Lulee on 2020/4/25
 */
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import HomePage from '../components/pages/HomePage'
import QuestionPage from '../components/pages/QuestionPage' 
import ResultPage from '../components/pages/ResultPage'

const routers = [
    { path: '/', name:'homeLink',component: HomePage },
    { path: '/question',name:'questionLink', component: QuestionPage },
    { path: '/result', name:'resultLink',component: ResultPage },
    //输错了，则显示首页
    { path: "*", redirect: "/"}
  ]

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routers
  })