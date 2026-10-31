import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/hakkimizda', name: 'about', component: AboutView },
    { path: '/odeme', name: 'checkout', component: CheckoutView }
  ]
})

export default router