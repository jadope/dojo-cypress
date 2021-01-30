import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/ListItems.vue')
  },
  {
    path: '/item/:Id',
    name: 'ItemDetail',
    component: () => import('../components/ItemDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
