<template>
  <aside class="hidden md:block w-64 p-4 bg-gray-800">
    <!-- 主题部分 -->
    <div class="mb-6">
      <h3 class="mb-2 text-lg font-bold text-white">Topics</h3>
      <ul>
        <li class="mb-1 text-sm text-gray-300">
          # Govee Ice Maker
          <span class="ml-2 text-green-400">673</span>
        </li>
        <li class="mb-1 text-sm text-gray-300">
          # Outdoor Wall Light
          <span class="ml-2 text-green-400">1.5 k</span>
        </li>
        <li class="mb-1 text-sm text-gray-300">
          # Outdoor Garden Light 
          <span class="ml-2 text-green-400">1.0 k</span>
        </li>
        <!-- Shuffle 提示 -->
        <div class="mt-2 text-sm text-blue-400 text-right">
          Shuffle(6/8)
        </div>
      </ul>
    </div>

    <!-- 俱乐部部分 -->
    <div>
      <h3 class="mb-2 text-lg font-bold text-white">Clubs</h3>
      <ul>
        <li class="mb-3 flex items-center justify-between text-sm text-gray-300">
          Government Activity Discussion Board 
          <span class="text-gray-400">32.7 people joined</span>
          <button class="ml-2 px-2 py-1 text-xs text-white bg-blue-500 rounded">+</button>
        </li>
        <li class="mb-3 flex items-center justify-between text-sm text-gray-300">
          Outdoor lighting decoration 
          <span class="text-gray-400">2660 people joined</span>
          <button class="ml-2 px-2 py-1 text-xs text-white bg-blue-500 rounded">+</button>
        </li>
        <li class="mb-3 flex items-center justify-between text-sm text-gray-300">
          Let it be a movie night 
          <span class="text-gray-400">2520 people joined</span>
          <button class="ml-2 px-2 py-1 text-xs text-white bg-blue-500 rounded">+</button>
        </li>
        <li class="mb-3 flex items-center justify-between text-sm text-gray-300">
          Show off your game equipment 
          <span class="text-gray-400">1620 people joined</span>
          <button class="ml-2 px-2 py-1 text-xs text-white bg-blue-500 rounded">+</button>
        </li>
        <li class="mb-3 flex items-center justify-between text-sm text-gray-300">
          Govi Light Festival 
          <span class="text-gray-400">17.5 people joined</span>
          <button class="ml-2 px-2 py-1 text-xs text-white bg-blue-500 rounded">+</button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
/* 移动端隐藏侧边栏 */
@media (max-width: 768px) {
  aside {
    display: none;
  }
}
</style>