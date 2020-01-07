import Vue from 'vue'
import VueRouter from 'vue-router'
// コンポーネントを読み込む
import Home from '../views/Home'
import About from '../views/About'
import Page1 from '../views/Page1'
import Page2 from '../views/Page2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/page1',
    name: '`Page1`',
    component: Page1
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
