<template>
  <div class="modal-mask" v-if="visible">
    <div class="modal-container">
      <h3>SIGN IN</h3>
      <input 
        v-model="email" 
        placeholder="email" 
        class="modal-input"
      />
      <input 
        v-model="password" 
        type="password" 
        placeholder="password"
        class="modal-input"
      />
      <button @click="handleLogin" class="login-btn">sign in</button>
      <button @click="handleClose" class="cancel-btn">close account</button>
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
  }
};

const handleClose = () => {
  email.value = '';
  password.value = '';
  emit('close');
};
</script>

<style>

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 确保弹窗在最上层 */
}
.modal-container {
  background:#1E1E1E;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.modal-input {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #2C2C2C;
  color: #ccc;
  font-size: 14px;
}

.modal-input::placeholder {
  color: #888;
  opacity: 1;
}
.modal-input:focus {
  border-color: #6699CC;
  outline: none;
}
.login-btn {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  background: linear-gradient(90deg, #20D09C 0%, #19BEFF 100%); 
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.cancel-btn {
  width: 100%;
  padding: 8px;
  background: #333;
  border: none;
  border-radius: 4px;
  color: #CCC;
  cursor: pointer;
}
.text-red-500 {
  color: #ff4444;
  font-size: 12px;
  text-align: center;
  margin: 5px 0;
}
.modal-container h3 {
  color: #FFF;
  text-align: center;
  margin-bottom: 16px;
}
</style>