import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchQuery: '',
    searchResults: [], // 确保初始化为空数组
    isSearching: false
  }),
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query
    },
    async performSearch() {
      // 清空之前的结果
      this.searchResults = [];
      
      // 如果输入为空，直接返回
      if (!this.searchQuery.trim()) {
        return;
      }
      
      this.isSearching = true;
      
      try {
        // 1. 模拟项目中的帖子和用户数据
        const mockData = [
          // 帖子数据
          {
            id: 1,
            title: "Govee智能灯使用教程",
            content: "这是一篇关于Govee智能灯的详细使用教程，包含连接方法和场景设置",
            author: "智能家居达人",
            type: "post",
            route: "/post/1"
          },
          {
            id: 2,
            title: "卧室灯光改造方案",
            content: "用Govee产品改造卧室灯光，打造温馨氛围",
            author: "装修小能手",
            type: "post",
            route: "/post/2"
          },
          // 用户数据
          {
            username: "智能家居达人",
            type: "user",
            route: "/user/智能家居达人"
          },
          {
            username: "装修小能手",
            type: "user",
            route: "/user/装修小能手"
          }
        ];
        
        // 2. 转换关键词为小写，确保搜索不区分大小写
        const keyword = this.searchQuery.toLowerCase();
        
        // 3. 搜索逻辑：过滤包含关键词的数据
        this.searchResults = mockData.filter(item => {
          // 检查帖子类型
          if (item.type === "post") {
            return item.title.toLowerCase().includes(keyword) ||
                   item.content.toLowerCase().includes(keyword) ||
                   item.author.toLowerCase().includes(keyword);
          } 
          // 检查用户类型
          else if (item.type === "user") {
            return item.username.toLowerCase().includes(keyword);
          }
          return false;
        });

        // 调试用：在控制台显示搜索结果
        console.log("搜索关键词:", keyword);
        console.log("搜索结果:", this.searchResults);
        
      } catch (error) {
        console.error('搜索出错:', error);
        this.searchResults = [];
      } finally {
        this.isSearching = false;
      }
    }
  }
})
    