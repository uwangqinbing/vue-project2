import { createRouter, createWebHistory } from 'vue-router';
import Discover from '../components/Discover.vue';
import PostDetail from '../views/PostDetail.vue';
import UserProfile from '../views/UserProfile.vue';
// 导入搜索结果页
import SearchResult from '../views/SearchResult.vue';

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
    props: true 
  },
  {
    path: '/user/:username',
    name: 'UserProfile',
    component: UserProfile,
    props: true
  },
  { 
    path: '/search', 
    name: 'SearchResults', 
    component: SearchResult 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;