<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 w-full max-w-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">Sign In</h2>
        <button @click="handleClose" class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- 错误信息显示 -->
      <div v-if="errorMessage" class="text-red-500 text-sm mb-4">{{ errorMessage }}</div>

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full px-3 py-2 border border-gray-300  text-gray-900 rounded-md"
            placeholder="Enter your email"
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full px-3 py-2 border border-gray-300  text-gray-900 rounded-md"
            placeholder="Enter your password"
          >
        </div>

        <button
          @click="handleLogin"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

// Props
const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  }
});

// Emits
const emit = defineEmits(['close', 'login']);

// State
const email = ref('');
const password = ref('');
const errorMessage = ref(''); // 新增错误信息状态

// Methods
const handleClose = () => {
  errorMessage.value = ''; // 关闭时清空错误信息
  emit('close');
};

const handleLogin = () => {
  // 清空之前的错误信息
  errorMessage.value = '';
  
  if (!email.value || !password.value) {
    errorMessage.value = 'Please fill in all fields';
    return;
  }

  emit('login', {
    email: email.value,
    password: password.value
  });
};
</script>