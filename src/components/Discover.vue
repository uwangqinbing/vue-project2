<template>
  <section class="p-4 md:p-8 w-full">
    <!-- 筛选栏 -->
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold text-gray-100">Discover</h2>
      <div class="flex space-x-2">
        <!-- 分类按钮 - All -->
        <button 
          class="px-3 py-1 text-sm text-gray-100 bg-gray-700 rounded"
          @click="activeTab = 'all'"
          :class="{ 'bg-blue-500': activeTab === 'all' }"
        >
          All
        </button>

        <!-- 分类按钮 - Questions -->
        <button 
          class="px-3 py-1 text-sm text-gray-100 bg-gray-700 rounded"
          @click="activeTab = 'questions'"
          :class="{ 'bg-blue-500': activeTab === 'questions' }"
        >
          Questions
        </button>

        <!-- 分类按钮 - Posts -->
        <button 
          class="px-3 py-1 text-sm text-gray-100 bg-gray-700 rounded"
          @click="activeTab = 'posts'"
          :class="{ 'bg-blue-500': activeTab === 'posts' }"
        >
          Posts
        </button>

        <!-- 分类按钮 - Videos -->
        <button 
          class="px-3 py-1 text-sm text-gray-100 bg-gray-700 rounded"
          @click="activeTab = 'videos'"
          :class="{ 'bg-blue-500': activeTab === 'videos' }"
        >
          Videos
        </button>
      </div>
    </div>

    <!-- 内容卡片（动态渲染 + 分类筛选） -->
    <div class="space-y-4">
      <router-link 
        :to="`/post/${post.id}`" 
        class="block"
        v-for="post in filteredPosts" 
        :key="post.id"
      >
        <div class="p-4 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
          <div class="flex items-center mb-2">
            <!-- 头像：点击跳转到用户主页 -->
            <router-link to="/user/BlindedByTheLights">
              <img 
                src="/OIP-C.webp" 
                alt="User avatar" 
                class="w-10 h-10 mr-2 rounded-full object-cover border-2 border-gray-600 !h-10"
              >
            </router-link>
            <span class="text-lg font-bold text-gray-100">TechLover</span>
          </div>
          <h3 class="mb-2 text-lg font-bold text-cyan-400">{{ post.title }}</h3>
          <p class="text-sm text-gray-300">
            {{ post.content.length > 100 ? post.content.slice(0, 100) + '...' : post.content }}
          </p>

          <div class="flex flex-wrap mt-2 space-x-2" v-if="post.image">
            <img 
              :src="`/${post.image}`" 
              :alt="`Post image for ${post.title}`" 
              class="w-1/4 md:w-1/6 rounded"
            >
          </div>

          <div class="flex items-center mt-2 space-x-4 text-gray-300">
            <span>{{ post.likes }} Likes</span>
            <span>{{ post.comments.length }} Comments</span>
            <span>{{ formatDate(post.date) }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { usePostStore } from '@/store/postStore';
import { ref, computed } from 'vue';

const postStore = usePostStore();
const activeTab = ref('all');
const filteredPosts = computed(() => {
  if (activeTab.value === 'all') {
    return postStore.posts; // 全部帖子
  }
  return postStore.posts.filter(post => post.type === activeTab.value);
});
// 4. 日期格式化
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    month: 'numeric',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}

.bg-blue-500 {
  background-color: #007bff !important;
}
</style>