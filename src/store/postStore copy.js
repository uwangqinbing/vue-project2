import { defineStore } from 'pinia';

export const usePostStore = defineStore('post', {
  state: () => ({
    currentPost: null,
    isLoading: false,
    error: null
  }),
  actions: {
    async fetchPostDetail(postId) {
      this.isLoading = true;
      this.error = null;
      try {
        // 实际项目中应该替换为真实API调用
        // 示例模拟数据
        const mockPost = {
          id: postId,
          title: 'How to connect Govee lights to Alexa?',
          author: 'Home Decor Expert',
          date: '2025-07-22 10:15 AM',
          content: '以下是连接Govee灯光到Alexa的详细步骤...',
          images: [
            '/屏幕截图 2025-07-18 155800.png',
            '/屏幕截图 2025-07-18 155608.png'
          ],
          likes: 45,
          comments: [/* 评论数据 */]
        };

        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 500));
        this.currentPost = mockPost;
      } catch (err) {
        this.error = 'Failed to fetch post details';
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    }
  }
});