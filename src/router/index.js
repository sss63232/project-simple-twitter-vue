import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main.vue'),
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
