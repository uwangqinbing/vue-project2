// ... existing code ...
<!-- 搜索结果 -->
<div v-if="searchStore.searchResults.length > 0" class="absolute top-16 left-0 right-0 mx-auto w-1/2 bg-gray-800 rounded-md shadow-lg p-4 z-50">
  <h3 class="text-white font-medium mb-2">找到 {{ searchStore.totalResults }} 个结果 (第 {{ searchStore.currentPage }}/{{ searchStore.totalPages }} 页)</h3>
  <div class="space-y-2 max-h-96 overflow-y-auto">
    <!-- 现有搜索结果列表... -->
  </div>
  <!-- 分页控件 -->
  <div class="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
    <button 
      @click="searchStore.prevPage()"
      :disabled="searchStore.currentPage <= 1"
      class="px-3 py-1 text-sm text-gray-300 bg-gray-700 rounded disabled:opacity-50"
    >
      上一页
    </button>
    <span class="text-sm text-gray-400">
      第 {{ searchStore.currentPage }} 页 / 共 {{ searchStore.totalPages }} 页
    </span>
    <button 
      @click="searchStore.nextPage()"
      :disabled="searchStore.currentPage >= searchStore.totalPages"
      class="px-3 py-1 text-sm text-gray-300 bg-gray-700 rounded disabled:opacity-50"
    >
      下一页
    </button>
  </div>
</div>

