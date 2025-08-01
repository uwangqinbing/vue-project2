import { defineStore } from 'pinia'

// 注意：useLoginStore 首字母建议大写（符合 Pinia 命名习惯）
export const useLoginStore = defineStore('login', {
  state: () => ({
    // 修正：统一为 showLoginModal（驼峰正确写法）
    showLoginModal: false, 
    userInfo: null 
  }),
  actions: {
    // 修正：方法名 openLoginModal（与 state 命名呼应）
    openLoginModal() { 
      this.showLoginModal = true
    },
    // 修正：方法名 closeLoginModal
    closeLoginModal() { 
      this.showLoginModal = false
    },
    login(userData) {
      this.userInfo = userData
      this.closeLoginModal()
    }
  }
})