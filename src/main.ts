import 'bootstrap/dist/js/bootstrap.bundle.js'
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import Home from '@/components/Home.vue'
import type { RouteRecordRaw } from 'vue-router'
import About from '@/components/About.vue'
import Lottery from '@/components/Lottery.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import axios from 'axios'
import UserComponent from '@/components/UserComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'

axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1/'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: LoginComponent },
  { path: '/lottery', component: Lottery },
  { path: '/users/:id', component: UserComponent }
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  linkActiveClass: 'link-active'
})

createApp(App).use(router).mount('#app')
