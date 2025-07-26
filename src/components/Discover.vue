<template>
  <section class="p-4 md:p-8 w-full">
    <!-- 筛选栏 -->
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold text-gray-100">Discover</h2>
      <div class="flex space-x-2">
        <button
          v-for="type in filterTypes"
          :key="type"
          :class="['px-3 py-1 text-sm rounded', activeFilter === type ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-100']"
          @click="activeFilter = type"
        >
          {{ type }}
        </button>
      </div>
    </div>

    <!-- 内容卡片 -->
    <div class="space-y-4">
      <div
        v-for="item in filteredCards"
        :key="item.id"
        class="p-4 bg-gray-800 rounded"
      >
        <div class="flex items-center mb-2">
          <img
            :src="item.avatar"
            alt="Avatar"
            class="w-10 h-10 mr-2 rounded-full"
          />
          <span class="text-lg font-bold text-gray-100">{{ item.author }}</span>
        </div>
        <h3 class="mb-2 text-lg font-bold text-cyan-400">{{ item.title }}</h3>
        <p class="text-sm text-gray-300">{{ item.desc }}</p>
        <div class="flex flex-wrap mt-2 space-x-2">
          <img
            v-for="(img, idx) in item.images"
            :key="idx"
            :src="img"
            alt="Post"
            class="w-1/4 md:w-1/6 rounded"
          />
        </div>
        <div class="flex items-center mt-2 space-x-4 text-gray-300">
          <span>{{ item.likes }} Likes</span>
          <span>{{ item.comments }} Comments</span>
          <span>{{ item.time }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const filterTypes = ['All', 'Questions', 'Posts', 'Videos'];
const activeFilter = ref('All');

const cards = [
  {
    id: 1,
    type: 'Posts',
    author: 'Blinded By The Lights',
    avatar: '/OIP-C.webp',
    title: 'Illuminate Your Wizarding World',
    desc: 'A magical collaboration between Blinded By The Lights & Govee...',
    images: ['/屏幕截图 2025-07-18 155810.png', '/屏幕截图 2025-07-18 155800.png'],
    likes: 231,
    comments: 198,
    time: '3:39 PM, 7/21/2025',
  },
  {
    id: 2,
    type: 'Questions',
    author: 'Govee Fan',
    avatar: '/vite.svg',
    title: 'How to sync lights with music?',
    desc: 'Looking for tips to sync my Govee lights with Spotify.',
    images: ['/屏幕截图 2025-07-18 155608.png'],
    likes: 88,
    comments: 34,
    time: '10:12 AM, 7/22/2025',
  },
  {
    id: 3,
    type: 'Videos',
    author: 'Tech Guru',
    avatar: '/vue.svg',
    title: 'Govee Light Strip Review',
    desc: 'Watch my full review of the new Govee light strip!',
    images: ['/屏幕截图 2025-07-18 155714.png'],
    likes: 120,
    comments: 56,
    time: '8:00 PM, 7/23/2025',
  },
];

const filteredCards = computed(() => {
  if (activeFilter.value === 'All') return cards;
  return cards.filter(card => card.type === activeFilter.value);
});
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>