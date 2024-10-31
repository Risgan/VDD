import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as Array<{ email: string; firstName: string; lastName: string; password: string }>,
  }),
  actions: {
    registerUser(user: { email: string; firstName: string; lastName: string; password: string }) {
      this.users.push(user);
    },
  },
});
