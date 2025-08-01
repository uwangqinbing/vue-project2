import { defineStore } from 'pinia'; 
export const useSearchStore = defineStore('search', {
  state: () => ({
    searchQuery: '',
    searchResults: [],
    isSearching: false,
    // 添加分页状态
    currentPage: 1,
    pageSize: 10,
    totalResults: 0
  }),
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query;
      // 重置为第一页
      this.currentPage = 1;
    },
    async performSearch() {
      this.searchResults = [];
      if (!this.searchQuery.trim()) return;

      this.isSearching = true;
      try {
        const mockData = [/* ... 现有模拟数据 ... */];
        const keyword = this.searchQuery.toLowerCase();

        // 1. 先过滤所有匹配结果
        const filteredResults = mockData.filter(item => {
          if (item.type === "post") {
            return item.title.toLowerCase().includes(keyword) ||
                  item.content.toLowerCase().includes(keyword) ||
                  item.author.toLowerCase().includes(keyword);
          } else if (item.type === "user") {
            return item.username.toLowerCase().includes(keyword);
          }
          return false;
        });

        // 2. 保存总结果数
        this.totalResults = filteredResults.length;

        // 3. 计算分页起始索引
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;

        // 4. 截取当前页结果
        this.searchResults = filteredResults.slice(startIndex, endIndex);

      } catch (error) {
        console.error('搜索出错:', error);
        this.searchResults = [];
      } finally {
        this.isSearching = false;
      }
    },
    // 添加分页控制方法
    nextPage() {
      const totalPages = Math.ceil(this.totalResults / this.pageSize);
      if (this.currentPage < totalPages) {
        this.currentPage++;
        this.performSearch();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.performSearch();
      }
    }
  },
  // 添加计算属性获取总页数
  getters: {
    totalPages() {
      return Math.ceil(this.totalResults / this.pageSize);
    }
  }
});
// ... existing code ...