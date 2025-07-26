<template>
  <aside class="hidden md:block w-64 p-4 bg-gray-800">
    <!-- 主题部分 -->
    <div class="mb-6">
      <h3 class="mb-2 text-lg font-bold text-white">主题</h3>
      <ul>
        <li class="mb-1 text-sm text-gray-300">
          # Govee制冰机 
          <span class="ml-2 text-green-400">673</span>
        </li>
        <li class="mb-1 text-sm text-gray-300">
          # 户外壁灯 
          <span class="ml-2 text-green-400">1.5 k</span>
        </li>
        <li class="mb-1 text-sm text-gray-300">
          # 户外花园灯 
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
      <h3 class="mb-2 text-lg font-bold text-white">俱乐部</h3>
      <ul>
        <li class="mb-3 flex items-center justify-between text-sm text-gray-300">
          政府活动讨论板 
          <span class="text-gray-400">32.7千人加入</span>
          <button class="ml-2 px-2 py-1 text-xs text-white bg-blue-500 rounded">+</button>
        </li>
        <li class="mb-3 flex items-center justify-between text-sm text-gray-300">
          室外照明装饰 
          <span class="text-gray-400">2660人加入</span>
          <button class="ml-2 px-2 py-1 text-xs text-white bg-blue-500 rounded">+</button>
        </li>
        <li class="mb-3 flex items-center justify-between text-sm text-gray-300">
          让它成为一个电影之夜 
          <span class="text-gray-400">2520人加入</span>
          <button class="ml-2 px-2 py-1 text-xs text-white bg-blue-500 rounded">+</button>
        </li>
        <li class="mb-3 flex items-center justify-between text-sm text-gray-300">
          展示您的游戏装备 
          <span class="text-gray-400">1620人加入</span>
          <button class="ml-2 px-2 py-1 text-xs text-white bg-blue-500 rounded">+</button>
        </li>
        <li class="mb-3 flex items-center justify-between text-sm text-gray-300">
          戈维灯光节 
          <span class="text-gray-400">17.5千人加入</span>
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