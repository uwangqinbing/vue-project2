<template>
  <header class="flex items-center justify-between p-4 bg-gray-900">
    <!-- Logo -->
    <div class="text-xl font-bold text-white">Govee</div>

    <!-- 搜索框（桌面端显示） -->
    <div class="hidden md:block w-1/2">
      <input
        type="text"
        placeholder="Search for posts, topics, and users"
        class="w-full px-4 py-2 text-sm text-gray-900 rounded-md"
      />
    </div>

    <!-- 功能按钮 -->
    <div class="flex items-center space-x-4">
      <button class="px-4 py-2 text-sm text-white bg-gray-700 rounded-md">
        Post
      </button>
      <button class="px-4 py-2 text-sm text-white bg-cyan-600 rounded-md" @click="$emit('show-login')">
        Sign in
      </button>
    </div>
  </header>
</template>

<style scoped>
/* 移动端隐藏搜索框 */
@media (max-width: 768px) {
  input {
    display: none;
  }
}
</style>