<template>
  <header class="flex items-center justify-between p-4 bg-gray-900">
    <!-- Logo -->
    <div class="text-xl font-bold text-white">Govee</div>

    <!-- 搜索框（桌面端显示） -->
    <div class="hidden md:block w-1/2">
      <input
        type="text"
        placeholder="Search for posts, topics, and users"
        class="w-full px-4 py-2 text-sm text-gray-900 rounded-md"
      />
    </div>

    <!-- 功能按钮 -->
    <div class="flex items-center space-x-4">
      <!-- Post按钮也触发登录弹窗 -->
      <button 
        class="px-4 py-2 text-sm text-white bg-gray-700 rounded-md"
        @click="showLoginModal = true"
      >
        Post
      </button>
      <button 
        class="px-4 py-2 text-sm text-white bg-cyan-600 rounded-md"
        @click="showLoginModal = true"
      >
        Sign in
      </button>
    </div>

    <!-- 登录弹窗 -->
    <LoginModal 
      :visible="showLoginModal" 
      @close="showLoginModal = false"
      @login="handleLogin"
    />
  </header>
</template>

<script setup>
import { ref } from 'vue';
import LoginModal from './LoginModal.vue';

// 控制登录弹窗显示/隐藏
const showLoginModal = ref(false);

// 处理登录逻辑
const handleLogin = (userData) => {
  // 这里可以添加实际登录逻辑，如调用API
  console.log('登录数据:', userData);
  
  // 登录成功后可以存储用户信息到localStorage或Vuex/Pinia
  // localStorage.setItem('user', JSON.stringify(userData));
  
  // 可以添加登录成功提示
  alert('登录成功！');
};
</script>

<style scoped>
/* 移动端隐藏搜索框 */
@media (max-width: 768px) {
  input {
    display: none;
  }
}
</style>