// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// 导入需要跳转的组件
import Discover from '../components/Discover.vue'
import PostDetail from '../views/PostDetail.vue' // 假设你已创建该组件
import UserProfile from '../views/UserProfile.vue' // 假设你已创建该组件

const routes = [
  { 
    path: '/', 
    name: 'Discover', 
    component: Discover 
  },
  { 
    path: '/post/:id', 
    name: 'PostDetail', 
    component: PostDetail 
  },
  { 
    path: '/user/:username', 
    name: 'UserProfile', 
    component: UserProfile 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router