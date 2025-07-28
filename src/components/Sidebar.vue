<template>
  <aside class="hidden md:block w-64 p-4 bg-gray-800 transition-all duration-300">
    <!-- Topics Section -->
    <div class="mb-8 border border-gray-700 rounded-lg p-4">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-lg font-bold text-white">Popular Topics</h3>
        <button class="text-xs text-blue-400 hover:text-blue-300 transition-colors">
          View All
        </button>
      </div>
      <ul>
        <li class="mb-2 p-2 rounded hover:bg-gray-700 transition-colors cursor-pointer">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-300"># Govee Ice Maker</span>
            <span class="text-xs text-green-400">673</span>
          </div>
        </li>
        <li class="mb-2 p-2 rounded hover:bg-gray-700 transition-colors cursor-pointer">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-300"># Outdoor Wall Light</span>
            <span class="text-xs text-green-400">1.5k</span>
          </div>
        </li>
        <li class="mb-2 p-2 rounded hover:bg-gray-700 transition-colors cursor-pointer">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-300"># Outdoor Garden Light</span>
            <span class="text-xs text-green-400">1.0k</span>
          </div>
        </li>
        <!-- Topic shuffle indicator -->
        <div class="mt-2 text-sm text-blue-400 text-right cursor-pointer hover:text-blue-300 transition-colors">
          Shuffle <span class="opacity-70">(6/8)</span>
        </div>
      </ul>
    </div>

    <!-- Clubs Section -->
    <div class="border border-gray-700 rounded-lg p-4">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-lg font-bold text-white">Recommended Clubs</h3>
        <button class="text-xs text-blue-400 hover:text-blue-300 transition-colors">
          More
        </button>
      </div>
      <ul>
        <li class="mb-3 p-2 rounded hover:bg-gray-700 transition-colors">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-300">Government Activity Board</span>
            <div class="flex items-center">
              <span class="text-xs text-gray-400 mr-2">32.7k members</span>
              <button class="px-2 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors">+</button>
            </div>
          </div>
        </li>
        <li class="mb-3 p-2 rounded hover:bg-gray-700 transition-colors">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-300">Outdoor Lighting Decor</span>
            <div class="flex items-center">
              <span class="text-xs text-gray-400 mr-2">2,660 members</span>
              <button class="px-2 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors">+</button>
            </div>
          </div>
        </li>
        <li class="mb-3 p-2 rounded hover:bg-gray-700 transition-colors">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-300">Let's Make It Movie Night</span>
            <div class="flex items-center">
              <span class="text-xs text-gray-400 mr-2">2,520 members</span>
              <button class="px-2 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors">+</button>
            </div>
          </div>
        </li>
        <li class="mb-3 p-2 rounded hover:bg-gray-700 transition-colors">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-300">Show Off Your Gaming Setup</span>
            <div class="flex items-center">
              <span class="text-xs text-gray-400 mr-2">1,620 members</span>
              <button class="px-2 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors">+</button>
            </div>
          </div>
        </li>
        <li class="mb-3 p-2 rounded hover:bg-gray-700 transition-colors">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-300">Govee Light Festival</span>
            <div class="flex items-center">
              <span class="text-xs text-gray-400 mr-2">17.5k members</span>
              <button class="px-2 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors">+</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
/* Hide sidebar on mobile */
@media (max-width: 768px) {
  aside {
    display: none;
  }
}

/* Add feedback for touch devices */
@media (hover: none) {
  li:active {
    background-color: #4b5563;
  }
}
</style>
