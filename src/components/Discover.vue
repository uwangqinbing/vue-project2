<template>
  <section class="p-4 md:p-8 w-full">
    <!-- 筛选栏 -->
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold text-gray-100">Discover</h2>
      <div class="flex space-x-2">
        <button class="px-3 py-1 text-sm text-gray-100 bg-gray-700 rounded">All</button>
        <button class="px-3 py-1 text-sm text-gray-100 bg-gray-700 rounded">Questions</button>
        <button class="px-3 py-1 text-sm text-gray-100 bg-gray-700 rounded">Posts</button>
        <button class="px-3 py-1 text-sm text-gray-100 bg-gray-700 rounded">Videos</button>
      </div>
    </div>

    <!-- 内容卡片 -->
    <div class="space-y-4">
      <!-- 第一张卡片：点击跳转到帖子详情 /post/1 -->
      <router-link to="/post/1" class="block">
        <div class="p-4 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
          <div class="flex items-center mb-2">
            <!-- 头像：点击跳转到用户主页 /user/BlindedByTheLights -->
            <router-link to="/user/BlindedByTheLights">
              <img 
                src="/OIP-C.webp" 
                alt="User avatar" 
                class="w-10 h-10 mr-2 rounded-full object-cover border-2 border-gray-600 !h-10"
              >
            </router-link>
            <span class="text-lg font-bold text-gray-100">TechLover</span>
          </div>
          <h3 class="mb-2 text-lg font-bold text-cyan-400">Govee LED Strip Review</h3>
          <p class="text-sm text-gray-300">I recently purchased the Govee LED strip and it exceeded my...</p>
          <div class="flex flex-wrap mt-2 space-x-2">
            <img src="/屏幕截图 2025-07-18 155810.png" alt="Post image 1" class="w-1/4 md:w-1/6 rounded">
            <img src="/屏幕截图 2025-07-18 155800.png" alt="Post image 2" class="w-1/4 md:w-1/6 rounded">
          </div>
          <div class="flex items-center mt-2 space-x-4 text-gray-300">
            <span>231 Likes</span>
            <span>198 Comments</span>
            <span>3:39 PM, 7/21/2025</span>
          </div>
        </div>
      </router-link>

      <!-- 第二张卡片：点击跳转到帖子详情 /post/2 -->
      <router-link to="/post/2" class="block">
        <div class="p-4 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
          <div class="flex items-center mb-2">
            <!-- 头像：点击跳转到用户主页 /user/HomeDecorExpert -->
            <router-link to="/user/HomeDecorExpert">
              <img 
                src="/OIP-C.webp" 
                alt="User avatar" 
                class="w-10 h-10 mr-2 rounded-full object-cover border-2 border-gray-600 !h-10"
              >
            </router-link>
            <span class="text-lg font-bold text-gray-100">SmartHomeExpert</span>
          </div>
          <h3 class="mb-2 text-lg font-bold text-cyan-400">Setting up Govee Smart Bulbs</h3>
          <p class="text-sm text-gray-300">Here's a step-by-step guide to setting up your Govee smart bulbs...</p>
          <div class="flex flex-wrap mt-2 space-x-2">
            <img src="/屏幕截图 2025-07-18 155800.png" alt="Post image 1" class="w-1/4 md:w-1/6 rounded">
          </div>
          <div class="flex items-center mt-2 space-x-4 text-gray-300">
            <span>342 Likes</span>
            <span>76 Comments</span>
            <span>10:15 AM, 7/22/2025</span>
          </div>
        </div>
      </router-link>

      <!-- 第三张卡片：点击跳转到帖子详情 /post/3 -->
      <router-link to="/post/3" class="block">
        <div class="p-4 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
          <div class="flex items-center mb-2">
            <!-- 头像：点击跳转到用户主页 /user/HomeDecorExpert -->
            <router-link to="/user/HomeDecorExpert">
              <img 
                src="/OIP-C.webp" 
                alt="User avatar" 
                class="w-10 h-10 mr-2 rounded-full object-cover border-2 border-gray-600 !h-10"
              >
            </router-link>
            <span class="text-lg font-bold text-gray-100">ComparisonKing</span>
          </div>
          <h3 class="mb-2 text-lg font-bold text-cyan-400">Govee vs Phillips Hue</h3>
          <p class="text-sm text-gray-300">A detailed comparison between Govee and Phillips Hue smart lighting systems...</p>
          <div class="flex items-center mt-2 space-x-4 text-gray-300">
            <span>45 Likes</span>
            <span>23 Comments</span>
            <span>2:47 PM, 7/22/2025</span>
          </div>
        </div>
      </router-link>

      <!-- 第四张卡片：点击跳转到帖子详情 /post/4 -->
      <router-link to="/post/4" class="block">
        <div class="p-4 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
          <div class="flex items-center mb-2">
            <!-- 头像：点击跳转到用户主页 /user/HomeDecorExpert -->
            <router-link to="/user/HomeDecorExpert">
              <img 
                src="/OIP-C.webp" 
                alt="User avatar" 
                class="w-10 h-10 mr-2 rounded-full object-cover border-2 border-gray-600 !h-10"
              >
            </router-link>
            <span class="text-lg font-bold text-gray-100">ProductHunter</span>
          </div>
          <h3 class="mb-2 text-lg font-bold text-cyan-400">Best Govee Products in 2023</h3>
          <p class="text-sm text-gray-300">My top picks for the best Govee products available this year</p>
          <div class="flex flex-wrap mt-2 space-x-2">
            <img src="/屏幕截图 2025-07-18 155608.png" alt="Video thumbnail" class="w-1/4 md:w-1/6 rounded">
          </div>
          <div class="flex items-center mt-2 space-x-4 text-gray-300">
            <span>589 Likes</span>
            <span>103 Comments</span>
            <span>5:30 PM, 7/23/2025</span>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
// 无需额外逻辑
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>