import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import BasicTricks from '../views/BasicTricks.vue';
import SiSebastianStack from '../views/SiSebastianStack.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/basic-tricks',
    name: 'BasicTricks',
    component: BasicTricks,
  },
  {
    path: '/si-sebastian-stack',
    name: 'SiSebastianStack',
    component: SiSebastianStack,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
