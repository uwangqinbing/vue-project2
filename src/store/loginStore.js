import { defineStore } from 'pinia';

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    showLoginModal: false,
    userInfo: null,
    // Mock user data
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
    },
    closeLoginModal() {
      this.showLoginModal = false;
    },
    login(credentials) {
      return new Promise((resolve, reject) => {
        // Simulate API call
        setTimeout(() => {
          const user = this.users.find(
            u => u.email === credentials.email && u.password === credentials.password
          );

          if (user) {
            // Store user info without password
            const { password, ...userWithoutPassword } = user;
            this.userInfo = userWithoutPassword;
            this.closeLoginModal();
            resolve(userWithoutPassword);
          } else {
            reject(new Error('Invalid email or password'));
          }
        }, 500);
      });
    },
    logout() {
      this.userInfo = null;
    }
  },
  persist: true // This will persist the state across page refreshes
});