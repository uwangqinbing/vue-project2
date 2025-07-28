<template>
  <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <!-- 弹窗容器 -->
    <div class="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-xl transform transition-all">
      <!-- 关闭按钮 -->
      <button @click="onClose" class="float-right text-gray-400 hover:text-white">×</button>
      
      <!-- 登录表单 -->
      <div class="clearfix pt-6">
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Sign In</h2>
        
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-sm text-gray-300 mb-1" for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
          </div>
          
          <div class="mb-6">
            <label class="block text-sm text-gray-300 mb-1" for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
          </div>
          
          <button
            type="submit"
            class="w-full py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-md transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <div class="mt-4 text-center text-sm text-gray-400">
          Don't have an account? <span class="text-cyan-400 cursor-pointer hover:underline">Sign up</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

// 接收visible属性控制弹窗显示/隐藏
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});

// 定义事件
const emit = defineEmits(['close', 'login']);

// 表单数据
const email = ref('');
const password = ref('');

// 关闭弹窗
const onClose = () => {
  emit('close');
  // 重置表单
  email.value = '';
  password.value = '';
};

// 处理登录
const handleLogin = () => {
  // 这里可以添加表单验证逻辑
  if (!email.value || !password.value) return;
  
  // 触发登录事件，传递表单数据
  emit('login', {
    email: email.value,
    password: password.value
  });
  
  // 登录成功后关闭弹窗（实际项目中应在后端验证成功后关闭）
  onClose();
};
</script>