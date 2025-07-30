// src/store/searchStore.js
import { defineStore } from 'pinia'

// 创建并导出一个搜索相关的存储库
export const useSearchStore = defineStore('search', {
  // 存储的数据
  state: () => ({
    searchQuery: '', // 搜索关键词
    searchResults: [], // 搜索结果
    isSearching: false // 是否正在搜索
  }),
  // 可以执行的操作
  actions: {
    // 设置搜索关键词
    setSearchQuery(query) {
      this.searchQuery = query
    },
    // 执行搜索
    async performSearch() {
      // 如果搜索框是空的，清空结果并返回
      if (!this.searchQuery.trim()) {
        this.searchResults = []
        return
      }
      
      this.isSearching = true // 标记正在搜索
      try {
        // 这里是模拟的帖子数据（实际项目中会从服务器获取）
        const mockPosts = [
          {
            id: 1,
            title: "卧室灯光改造",
            content: "用Govee智能灯改造卧室的经历分享...",
            author: "家居达人",
            date: "今天 14:30"
          },
          {
            id: 2,
            title: "Govee灯光连接教程",
            content: "教大家如何连接Govee灯光到手机APP...",
            author: "技术宅",
            date: "昨天 09:15"
          },
          {
            id: 3,
            title: "我的灯光秀",
            content: "分享我用Govee做的灯光秀视频...",
            author: "家居达人",
            date: "3天前 20:47"
          }
        ]
        
        // 核心搜索逻辑：过滤出包含搜索关键词的帖子
        // 会检查标题、内容和作者名，不区分大小写
        this.searchResults = mockPosts.filter(post => 
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          post.author.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      } catch (error) {
        console.error('搜索出错了:', error)
      } finally {
        this.isSearching = false // 搜索结束
      }
    }
  }
})