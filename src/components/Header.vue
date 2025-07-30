<template>
  <header class="flex items-center justify-between p-4 bg-gray-900">
    <!-- 网站Logo -->
    <div class="text-xl font-bold text-white">Govee社区</div>

    <!-- 搜索框（电脑上显示） -->
    <div class="hidden md:block w-1/2">
      <div class="relative">
        <input
          type="text"
          placeholder="搜索帖子或用户..."
          class="w-full px-4 py-2 text-sm text-gray-900 rounded-md"
          v-model="searchQuery"
          @input="handleSearchInput"
          @keyup.enter="performSearch"
        />
        <button 
          @click="performSearch"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          🔍
        </button>
      </div>
    </div>

    <!-- 按钮区域 -->
    <div class="flex items-center space-x-4">
      <button class="px-4 py-2 text-sm text-white bg-gray-700 rounded-md">
        发布帖子
      </button>
      <button class="px-4 py-2 text-sm text-white bg-cyan-600 rounded-md">
        登录
      </button>
    </div>

    <!-- 搜索结果显示区域 -->
    <div v-if="searchStore.searchResults.length > 0" 
       class="absolute top-16 left-0 right-0 mx-auto w-1/2 bg-gray-800 rounded-md shadow-lg p-4 z-50">
    <h3 class="text-white font-medium mb-2">搜索结果</h3>
    <div class="space-y-2 max-h-96 overflow-y-auto">
      <div 
        class="block p-2 hover:bg-gray-700 rounded text-gray-200 cursor-pointer"
        v-for="result in searchStore.searchResults" 
        :key="result.id"
        @click="clearSearchResults"
      >
        <div class="font-medium text-cyan-400">{{ result.title }}</div>
        <div class="text-sm text-gray-400">作者: {{ result.author }}</div>
      </div>
    </div>
  </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useSearchStore } from '../store/searchStore';

// 获取搜索存储实例
const searchStore = useSearchStore();
// 绑定输入框的搜索关键词
const searchQuery = ref('');

// 当输入框内容变化时更新搜索关键词
const handleSearchInput = (e) => {
  searchStore.setSearchQuery(e.target.value);
};

// 执行搜索
const performSearch = () => {
  searchStore.performSearch();
};

// 清空搜索结果
const clearSearchResults = () => {
  searchStore.searchResults = [];
  searchQuery.value = '';
};
</script>

<style scoped>
/* 手机上隐藏搜索框 */
@media (max-width: 768px) {
  input {
    display: none;
  }
}
</style>