import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    login(credentials) {
      // Simulate an authentication call
      if (credentials.email === 'test@example.com' && credentials.password === 'password123') {
        this.user = { email: credentials.email };
        return true; // Authenticated
      }
      return false; // Not authenticated
    },
    logout() {
      this.user = null;
    },
  },
});
