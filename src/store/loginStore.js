import { defineStore } from 'pinia';

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    showLoginModal: false,
    userInfo: null,
    loginError: null,
    // Mock用户数据（自动注册的用户会保存在这里）
    users: [
      {
        id: 1,
        email: 'user@example.com',
        password: 'password123',
        username: 'John Doe',
        avatar: '/user-avatar.png'
      }
    ]
  }),
  actions: {
    openLoginModal() {
      this.showLoginModal = true;
      this.loginError = null;
    },
    closeLoginModal() {
      this.showLoginModal = false;
      this.loginError = null;
    },
    login(credentials) {
      this.loginError = null;
      
      // 基础验证：不能为空
      if (!credentials.email || !credentials.password) {
        const error = new Error('请输入邮箱和密码');
        this.loginError = error.message;
        return Promise.reject(error); // 注意：这里修正了之前的reject调用方式
      }

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // 1. 检查用户是否已存在
          const existingUser = this.users.find(
            u => u.email === credentials.email
          );

          if (existingUser) {
            // 2. 用户存在：验证密码
            if (existingUser.password === credentials.password) {
              // 密码正确：登录成功
              const { password, ...userWithoutPassword } = existingUser;
              this.userInfo = userWithoutPassword;
              this.closeLoginModal();
              resolve(userWithoutPassword);
            } else {
              // 密码错误
              const error = new Error('密码错误');
              this.loginError = error.message;
              reject(error);
            }
          } else {
            // 3. 用户不存在：自动注册新用户
            const newUser = {
              id: this.users.length + 1, // 自动生成唯一ID
              email: credentials.email,
              password: credentials.password,
              username: credentials.email.split('@')[0], // 用邮箱前缀作为用户名
              avatar: '/default-avatar.png' // 默认头像
            };

            // 保存新用户到列表
            this.users.push(newUser);
            // 登录新用户
            const { password, ...userWithoutPassword } = newUser;
            this.userInfo = userWithoutPassword;
            this.closeLoginModal();
            resolve(userWithoutPassword);
          }
        }, 500);
      });
    },
    logout() {
      this.userInfo = null;
    }
  },
  persist: true // 持久化保存用户数据（包括自动注册的用户）
});
