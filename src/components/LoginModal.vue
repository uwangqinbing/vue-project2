<template>
  <div class="modal-mask" v-if="visible">
    <div class="modal-container">
      <h3>登录</h3>
      <input 
        v-model="email" 
        placeholder="请输入邮箱" 
        class="modal-input"
      />
      <input 
        v-model="password" 
        type="password" 
        placeholder="请输入密码" 
        class="modal-input"
      />
      <button @click="handleLogin" class="login-btn">登录（自动注册新用户）</button>
      <button @click="handleClose" class="cancel-btn">取消</button>
      <!-- 显示错误信息 -->
      <p class="text-red-500" v-if="loginStore.loginError">
        {{ loginStore.loginError }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useLoginStore } from '@/store/loginStore';
import { defineEmits, defineProps } from 'vue';

const loginStore = useLoginStore();
const emit = defineEmits(['close']);
const props = defineProps({ visible: Boolean });

const email = ref('');
const password = ref('');

const handleLogin = async () => {
  try {
    await loginStore.login({ email: email.value, password: password.value });
  } catch (error) {
    // 错误信息已在store中存储
  }
};

const handleClose = () => {
  // 关闭时清空输入内容
  email.value = '';
  password.value = '';
  emit('close');
};
</script>

<style>
/* 简单样式，可根据你的项目调整 */
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 确保弹窗在最上层 */
}
.modal-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}
/* 关键修改：明确设置输入框的文字颜色和背景色 */
.modal-input {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white; /* 白色背景 */
  color: #333; /* 深灰色文字，确保清晰可见 */
  font-size: 14px; /* 适当增大字体 */
}
/* 修复 placeholder 显示 */
.modal-input::placeholder {
  color: #999; /* 浅灰色提示文字 */
  opacity: 1; /* 确保浏览器不默认降低透明度 */
}
.login-btn {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.cancel-btn {
  width: 100%;
  padding: 8px;
  background: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.text-red-500 {
  color: #ff4444;
  font-size: 12px;
  text-align: center;
  margin: 5px 0;
}
</style>