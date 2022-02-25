import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import BlankPage from '@/views/BlankPage.vue';
import register from '../views/register.vue';

Vue.use(VueRouter);

const routes = [

  // 跟目錄
  {
    path: '/',
    name: 'root',
    redirect: '/main',
  },
  // 首頁
  // main
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main.vue'),
  },
  // 首頁發推特
  {
    path: '/main/tweet',
    name: 'mainTweet',
    component: BlankPage,
  },
  // navbar推文按鈕的的modal，怪怪的套不上去，之後再研究
  {
    path: '/tweet',
    name: 'tweet',
    component: () => import('../components/TweetModal.vue'),
  },
  {
    path: '/reply/modal',
    name: 'reply/modal',
    component: () => import('../components/UserTweets.vue'),
  },
  {
    // 單一推文
    // reply
    path: '/reply/:id',
    name: 'reply',
    component: () => import('../views/reply.vue'),
  },

  // Settings
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
  // user
  {
    path: '/user/:id',
    component: () => import('@/views/User.vue'),
    children: [
      // 推文 tab
      {
        path: 'tweets',
        name: 'user-tweets',
        component: () => import('@/components/UserTweets.vue'),
      },
      // 推文與回覆 tab
      {
        path: 'replies',
        name: 'user-replies',
        component: () => import('@/components/UserReplies.vue'),
      },
      // 喜歡的內容 tab
      {
        path: 'likes',
        name: 'user-likes',
        component: () => import('@/components/UserLikes.vue'),
      },
      // 跟隨者
      {
        path: 'followers',
        name: 'user-followers',
        component: () => import('@/components/Followers.vue'),
      },
      // 正在跟隨者
      {
        path: 'following',
        name: 'user-following',
        component: () => import('@/components/Following.vue'),
      },
    ],
  },
  // user setting
  {
    path: '/profile/setting',
    name: 'setting',
    component: BlankPage,
  },
  // admin
  {
    path: '/admin',
    name: 'admin-root',
    redirect: BlankPage,
  },
  {
    path: '/admin/signin',
    name: 'admin-signin',
    component: BlankPage,
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
