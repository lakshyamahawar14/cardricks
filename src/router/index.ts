import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BasicTricks from '../views/BasicTricks.vue';
import SiSebastianStack from '../views/SiSebastianStack.vue';
import Home from '../views/Home.vue';
import Playground from '../views/Playground.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/basic-tricks/:id?',
    name: 'BasicTricks',
    component: BasicTricks,
  },
  {
    path: '/si-sebastian-stack/:id?',
    name: 'SiSebastianStack',
    component: SiSebastianStack,
  },
  {
    path: '/playground/',
    name: 'Playground',
    component: Playground
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.path === '/basic-tricks/' || to.path === '/basic-tricks') {
    next('/basic-tricks/1');
  } else if (to.path === '/si-sebastian-stack/' || to.path === '/si-sebastian-stack') {
    next('/si-sebastian-stack/1');
  } else {
    next();
  }
});

export default router;
