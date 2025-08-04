<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Back Button -->
    <button @click="goBack" class="mb-6 flex items-center text-blue-500 hover:text-blue-700">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      Back to Posts
    </button>

    <!-- Loading State -->
    <div v-if="postStore.isLoading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>

    <!-- Error State -->
    <div v-if="postStore.error && !postStore.isLoading" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Error: </strong>
      <span class="block sm:inline">{{ postStore.error }}</span>
    </div>

    <!-- Post Content -->
    <div v-if="postStore.currentPost && !postStore.isLoading" class="bg-white rounded-lg shadow-md overflow-hidden">
      <!-- Post Header -->
      <div class="p-6">
        <div class="flex items-center mb-4">
          <!-- 固定使用public文件夹中的OIP-C.webp作为头像 -->
          <img src="/OIP-C.webp" alt="Author avatar" class="w-10 h-10 rounded-full mr-3">
          <div>
            <h3 class="font-bold text-gray-900">{{ postStore.currentPost.author }}</h3>
            <p class="text-sm text-gray-500">{{ postStore.currentPost.date }}</p>
          </div>
        </div>

        <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ postStore.currentPost.title }}</h1>

        <!-- 修复 tags 遍历 -->
        <div class="flex flex-wrap gap-2 mb-6" v-if="postStore.currentPost.tags && postStore.currentPost.tags.length > 0">
          <span v-for="tag in postStore.currentPost.tags" :key="tag" class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {{ tag }}
          </span>
        </div>

        <!-- 固定使用public文件夹中的屏幕截图作为帖子图片 -->
        <img src="/屏幕截图 2025-07-18 155714.png" alt="Post image" class="w-full h-64 object-cover rounded-lg mb-6">

        <div class="prose max-w-none text-gray-700">
          <p v-for="(paragraph, index) in postStore.currentPost.content.split('\n\n')" :key="index" class="mb-4">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <!-- Post Actions -->
      <div class="px-6 pb-6 flex items-center justify-between border-t border-gray-200 pt-4">
        <button class="flex items-center text-gray-500 hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          <span>{{ postStore.currentPost.likes }}</span>
        </button>
        <button class="flex items-center text-gray-500 hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM6 10a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zm-8 4a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          <span>{{ postStore.currentPost.comments.length }}</span>
        </button>
      </div>

      <!-- Comments Section -->
      <div class="px-6 pb-6">
        <h2 class="text-xl font-bold mb-4">Comments</h2>

        <div class="space-y-4">
          <div v-for="comment in postStore.currentPost.comments" :key="comment.id" class="border-b border-gray-100 pb-4">
            <div class="flex items-start">
              <!-- 评论者头像也使用OIP-C.webp -->
              <img src="/OIP-C.webp" alt="Comment author avatar" class="w-8 h-8 rounded-full mr-3 mt-1">
              <div class="flex-1">
                <div class="flex items-center justify-between mb-1">
                  <h4 class="font-bold text-gray-900 text-sm">{{ comment.author }}</h4>
                  <p class="text-xs text-gray-500">{{ comment.date }}</p>
                </div>
                <p class="text-sm text-gray-700">{{ comment.content }}</p>
              </div>
            </div>
          </div>

          <div v-if="postStore.currentPost.comments.length === 0" class="text-center py-6 text-gray-500">
            No comments yet. Be the first to comment!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { usePostStore } from '@/store/postStore';
import { useMeta } from 'vue-meta';

const router = useRouter();
const postStore = usePostStore();
const { id } = router.currentRoute.value.params;

// Fetch post data when component mounts
onMounted(() => {
  if (id) {
    postStore.fetchPostDetail(id);
  }
});

// Clear post data when component unmounts
onUnmounted(() => {
  postStore.clearCurrentPost();
});

// Navigation
const goBack = () => {
  router.go(-1);
};

// 动态设置meta
useMeta(() => ({
  title: `${postStore.currentPost?.title} | Govee 社区`,
  meta: [
    { 
      name: 'keywords', 
      content: [...(postStore.currentPost?.tags || []), 'Govee', '智能设备'].join(', ')
    },
    { 
      name: 'description', 
      content: postStore.currentPost?.content.substring(0, 160) || 'Govee智能设备社区讨论'
    }
  ]
}));
</script>