'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
require('bootstrap/dist/js/bootstrap.bundle.js')
var vue_1 = require('vue')
var App_vue_1 = require('./App.vue')
require('./assets/main.css')
var Home_vue_1 = require('@/components/Home.vue')
var About_vue_1 = require('@/components/About.vue')
var Lottery_vue_1 = require('@/components/Lottery.vue')
var vue_router_1 = require('vue-router')
var axios_1 = require('axios')
var UserComponent_vue_1 = require('@/components/UserComponent.vue')
var LoginComponent_vue_1 = require('@/components/LoginComponent.vue')
axios_1.default.defaults.baseURL = 'https://api.escuelajs.co/api/v1/'
var routes = [
  { path: '/', component: Home_vue_1.default },
  { path: '/about', component: About_vue_1.default },
  { path: '/login', component: LoginComponent_vue_1.default },
  { path: '/lottery', component: Lottery_vue_1.default },
  { path: '/users/:id', component: UserComponent_vue_1.default }
]
var router = (0, vue_router_1.createRouter)({
  routes: routes,
  history: (0, vue_router_1.createWebHashHistory)(),
  linkActiveClass: 'link-active'
})
;(0, vue_1.createApp)(App_vue_1.default).use(router).mount('#app')
