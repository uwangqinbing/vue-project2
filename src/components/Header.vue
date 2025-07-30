<template>
  <header class="flex items-center justify-between p-4 bg-gray-900 relative">
    <!-- Logo -->
    <div class="text-xl font-bold text-white">Govee</div>

    <!-- 搜索框 -->
    <div class="hidden md:block w-1/2">
      <div class="relative">
        <input
          type="text"
          placeholder="搜索帖子、话题或用户..."
          class="w-full px-4 py-2 text-sm text-gray-900 rounded-md"
          v-model="searchQuery"
          @input="handleSearchInput"
          @keyup.enter="performSearch"
        />
        <button 
          @click="performSearch"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          🔍
        </button>
      </div>
    </div>

    <!-- 功能按钮 -->
    <div class="flex items-center space-x-4">
      <button 
        class="px-4 py-2 text-sm text-white bg-gray-700 rounded-md hover:bg-gray-600"
        @click="handleShowLoginModal" 
      >
        Post
      </button>
      <button 
        class="px-4 py-2 text-sm text-white bg-cyan-600 rounded-md hover:bg-cyan-500"
        @click="handleShowLoginModal" 
      >
        Sign in
      </button>
    </div>

    <!-- 搜索状态提示 -->
    <div v-if="searchStore.isSearching" class="absolute top-16 left-0 right-0 mx-auto w-1/2 bg-gray-800 rounded-md p-4 z-50 text-white">
      正在搜索 "{{ searchQuery }}" ...
    </div>

    <!-- 搜索结果 -->
    <div 
      v-if="searchStore.searchResults && searchStore.searchResults.length > 0" 
      class="absolute top-16 left-0 right-0 mx-auto w-1/2 bg-gray-800 rounded-md shadow-lg p-4 z-50"
    >
      <h3 class="text-white font-medium mb-2">找到 {{ searchStore.searchResults.length }} 个结果</h3>
      <div class="space-y-2 max-h-96 overflow-y-auto">
        <div 
          class="p-2 hover:bg-gray-700 rounded text-gray-200 cursor-pointer transition-colors"
          v-for="result in searchStore.searchResults" 
          :key="result.id || result.username"
          @click="goToResult(result.route)"
        >
          <div v-if="result.type === 'post'" class="font-medium text-cyan-400">{{ result.title }}</div>
          <div v-if="result.type === 'user'" class="font-medium text-green-400">👤 {{ result.username }}</div>
          <div v-if="result.type === 'post'" class="text-sm text-gray-400">作者: {{ result.author }}</div>
        </div>
      </div>
    </div>

    <!-- 无结果提示 -->
    <div 
      v-if="!searchStore.isSearching && searchStore.searchResults && 
            searchStore.searchResults.length === 0 && searchQuery.trim()" 
      class="absolute top-16 left-0 right-0 mx-auto w-1/2 bg-gray-800 rounded-md p-4 z-50 text-white"
    >
      没有找到与 "{{ searchQuery }}" 相关的内容
    </div>

    <!-- 登录弹窗组件 - 添加更高的z-index确保显示在最上层 -->
    <LoginModal 
      v-if="showLoginModal" 
      @close="showLoginModal = false"
      class="z-60"  
    />
  </header>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useSearchStore } from '../store/searchStore';
// 确保LoginModal组件路径正确
// 如果你的LoginModal在components目录下，路径应该是这样的：
import LoginModal from '../components/LoginModal.vue';

// 登录弹窗控制变量
const showLoginModal = ref(false);

// 显示登录弹窗的方法（便于调试和扩展）
const handleShowLoginModal = () => {
  showLoginModal.value = true;
  // 调试用：确认方法被调用
  console.log('登录弹窗应显示，当前状态:', showLoginModal.value);
};

// 搜索相关逻辑（保持不变）
const searchStore = useSearchStore();
const searchQuery = ref('');
const router = useRouter();

const handleSearchInput = (e) => {
  searchStore.setSearchQuery(e.target.value);
};

const performSearch = () => {
  if (searchQuery.value.trim()) {
    searchStore.performSearch();
  } else {
    searchStore.searchResults = [];
  }
};

const goToResult = (route) => {
  router.push(route);
  searchStore.searchResults = [];
  searchQuery.value = '';
};

watch(searchQuery, (newVal) => {
  const timer = setTimeout(() => {
    if (newVal.trim()) {
      searchStore.performSearch();
    } else {
      searchStore.searchResults = [];
    }
  }, 300);
  
  return () => clearTimeout(timer);
});
</script>
