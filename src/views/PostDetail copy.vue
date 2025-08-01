<template>
  <div class="p-4">
    <!-- 返回按钮 -->
    <button 
      @click="$router.back()"
      class="mb-4 text-cyan-400 hover:underline"
    >
      ← 返回列表
    </button>

    <!-- 帖子详情内容 -->
    <div class="bg-gray-800 rounded-lg overflow-hidden">
      <!-- 帖子头部信息 -->
      <div class="p-6">
        <div class="flex items-center mb-4">
          <img 
            src="/OIP-C.webp"
            alt="User avatar"
            class="w-12 h-12 mr-3 rounded-full object-cover border-2 border-gray-600"
          >
          <div>
            <h3 class="text-lg font-bold text-white">Home Decor Expert</h3>
            <p class="text-sm text-gray-400">发布于 2025-07-22 10:15 AM</p>
          </div>
        </div>
        <h1 class="text-2xl font-bold text-white mb-4">How to connect Govee lights to Alexa?</h1>
        <div class="prose prose-invert max-w-none text-gray-300 mb-6">
          <p>以下是连接Govee灯光到Alexa的详细步骤：</p>
          <ol class="list-decimal pl-5 space-y-2">
            <li>确保Govee灯光已通电并连接到WiFi</li>
            <li>在手机上打开Govee Home应用，确保设备在线</li>
            <li>打开Alexa应用，点击右上角的"+"号</li>
            <li>选择"添加设备"，然后选择"照明"类别</li>
            <li>找到并选择"Govee"品牌</li>
            <li>按照提示登录您的Govee账户，完成授权</li>
            <li>Alexa将自动发现您的Govee设备，选择要添加的设备即可</li>
          </ol>
          <p>如果连接失败，请尝试重启路由器和Govee设备后重试。</p>
        </div>

        <!-- 帖子图片 -->
        <div class="grid grid-cols-2 gap-3 mb-6">
          <img src="/屏幕截图 2025-07-18 155800.png" alt="教程截图1" class="rounded-lg w-full h-auto">
          <img src="/屏幕截图 2025-07-18 155608.png" alt="教程截图2" class="rounded-lg w-full h-auto">
        </div>

        <!-- 互动按钮 -->
        <div class="flex items-center space-x-6 text-gray-400">
          <button class="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
            <span>👍</span>
            <span>45 Likes</span>
          </button>
          <button class="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
            <span>💬</span>
            <span>23 Comments</span>
          </button>
          <button class="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
            <span>🔗</span>
            <span>Share</span>
          </button>
        </div>
      </div>

      <!-- 评论区 -->
      <div class="border-t border-gray-700 p-6">
        <h3 class="text-xl font-bold text-white mb-4">Comments (23)</h3>
        <div class="space-y-4 max-h-96 overflow-y-auto pr-2">
          <!-- 评论项 -->
          <div class="flex space-x-3 pb-4 border-b border-gray-700">
            <img src="/OIP-C.webp" alt="Comment avatar" class="w-8 h-8 rounded-full object-cover flex-shrink-0">
            <div class="flex-1">
              <div class="flex items-center justify-between mb-1">
                <span class="font-medium text-white">SmartHomeBeginner</span>
                <span class="text-xs text-gray-500">2天前</span>
              </div>
              <p class="text-sm text-gray-300">非常有用的教程！我成功连接了我的Govee灯到Alexa。</p>
            </div>
          </div>
          <!-- 更多评论... -->
        </div>

        <!-- 评论输入框 -->
        <div class="mt-6">
          <textarea 
            class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="添加评论..."
            rows="2"
          ></textarea>
          <div class="flex justify-end mt-2">
            <button class="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md transition-colors">
              发布评论
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';
import { usePostStore } from '../store/postStore';

defineProps({
  id: {
    type: String,
    required: true
  }
});

const postStore = usePostStore();

onMounted(() => {
  // 从store获取帖子详情数据
  postStore.fetchPostDetail(props.id);
});
</script>