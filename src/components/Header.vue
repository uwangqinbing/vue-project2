<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="../assets/vue.svg" alt="Logo" class="h-8 w-auto">
        <span class="text-xl font-bold text-gray-800">Govee Community</span>
      </div>

      <!-- Search Bar -->
      <div class="flex-1 max-w-md mx-8">
        <div class="relative">
          <input
            v-model="searchQuery"
            @input="handleSearch"
            @focus="showSearchResults = true"
            placeholder="搜索帖子..."
            class="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          >
          <button @click="handleSearch" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <!-- Search Results -->
        <div v-if="showSearchResults && searchResults.length > 0" class="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div v-for="result in searchResults" :key="result.id" class="p-3 hover:bg-gray-100 cursor-pointer" @click="goToPostDetail(result.id)">
            <h3 class="font-medium">{{ result.title }}</h3>
            <p class="text-sm text-gray-600">{{ result.content.substring(0, 50) }}...</p>
          </div>
        </div>
      </div>

      <!-- User Menu -->
      <div class="flex items-center space-x-4">
        <button v-if="!userInfo" @click="loginStore.openLoginModal()" class="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
          Sign in
        </button>
        <button v-if="userInfo" @click="handleLogout" class="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600">
          Sign out
        </button>
        <button v-if="userInfo" class="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
          Post
        </button>
        <div v-if="userInfo" class="flex items-center space-x-2">
          <img :src="userInfo.avatar || '/default-avatar.png'" alt="User Avatar" class="h-8 w-8 rounded-full">
          <span>{{ userInfo.username }}</span>
        </div>
      </div>
    </div>
  </header>
  <LoginModal
    v-if="loginStore.showLoginModal"
    :visible="loginStore.showLoginModal"
    @close="loginStore.closeLoginModal()"
    @login="handleLogin"
  />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useLoginStore } from '@/store/loginStore';
import { useSearchStore } from '@/store/searchStore';
import LoginModal from './LoginModal.vue';

const router = useRouter();
const loginStore = useLoginStore();
const searchStore = useSearchStore();

// State
const searchQuery = ref('');
const showSearchResults = ref(false);
const searchResults = ref([]);
const userInfo = ref(null);

// Watch for auth state changes
watch(
  () => loginStore.userInfo,
  (newVal) => {
    userInfo.value = newVal;
  },
  { immediate: true }
);

// Methods
const handleSearch = () => {
  if (searchQuery.value.length > 0) {
    searchStore.performSearch(searchQuery.value);
    searchResults.value = searchStore.searchResults;
  } else {
    searchResults.value = [];
  }
};

const goToPostDetail = (postId) => {
  router.push(`/post/${postId}`);
  showSearchResults.value = false;
};

const handleLogin = async (credentials) => {
  try {
    await loginStore.login(credentials);
    // Login successful
  } catch (error) {
    // 将错误信息传递给登录模态框
    const loginModal = document.querySelector('.fixed.inset-0');
    if (loginModal) {
      const errorElement = loginModal.querySelector('.text-red-500');
      if (errorElement) {
        errorElement.textContent = 'Login failed: ' + error.message;
      }
    }
  }
};

const handleLogout = () => {
  loginStore.logout();
};

// Close search results when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.relative')) {
      showSearchResults.value = false;
    }
  });
});
</script>