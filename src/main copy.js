// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import './style.css'
import './tailwind.css'
import App from './App.vue'
// 导入路由配置
import router from './router'  

createApp(App)
  .use(router) // 关键：注册路由
  .mount('#app')