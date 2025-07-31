import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import './style.css'
import './tailwind.css'
import App from './App.vue' 
import router from './router'  

// 创建 Vue 应用实例
const app = createApp(App) 
// 注册 Pinia 插件，让应用可以使用 Pinia 管理状态
app.use(createPinia()) 
app.use(router) 
app.mount('#app') 