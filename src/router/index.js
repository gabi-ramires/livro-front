import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Capitulos from '../views/CapitulosPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/capitulos',
    name: 'CapitulosPage',
    component: Capitulos
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
