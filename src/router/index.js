import { createRouter, createWebHistory } from 'vue-router';
import Discover from '../components/Discover.vue';
import PostDetail from '../views/PostDetail.vue';
import UserProfile from '../views/UserProfile.vue';

const routes = [
  {
    path: '/',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetail,
    props: true // 关键配置，确保正确
  },
  {
    path: '/user/:username',
    name: 'UserProfile',
    component: UserProfile,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;