import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import register from '../views/register.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'root',
  //   redirect: '/login'
  // },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
//   {
//     path: '/admin',
//     name: 'admin-root',
//     redirect: '/admin/signin',
//   },
//   {
//     path: '/admin/signin',
//     name: 'admin-signin',
//     component: admin,
//   },
];

const router = new VueRouter({
  routes,
});

export default router;
