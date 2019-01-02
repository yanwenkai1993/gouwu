/*
配置路由
因为每个模块都是单独的，所以你要在哪个模块使用哪个别的模块都需要单独引入
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@compnents/login/Login'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/login',
    component: Login,
    name: 'login'
  }]
})
