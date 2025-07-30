<template>
  <div class="p-4">
    <!-- 返回按钮 -->
    <button 
      @click="$router.back()" 
      class="mb-4 text-cyan-400 hover:underline"
    >
      ← 返回列表
    </button>

    <!-- 帖子详情内容 -->
    <div class="bg-gray-800 p-6 rounded-lg">
      <h1 class="text-2xl font-bold text-white mb-4">帖子详情 #{{ id }}</h1>
      <p class="text-gray-300">这里是帖子 {{ id }} 的详细内容...</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// 接收路由参数
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>