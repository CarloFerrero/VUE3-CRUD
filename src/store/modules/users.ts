import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    users: [] as User[],
  }),
  actions: {
    async fetchUsers() {
      const response = await axios.get("/api/users");
      this.users = response.data;
    },
    async createUser(user: User) {
      const response = await axios.post("/api/users", user);
      this.users.push(response.data);
    },
    async updateUser(user: User) {
      await axios.put(`/api/users/${user.id}`, user);
      const index = this.users.findIndex((u) => u.id === user.id);
      this.users.splice(index, 1, user);
    },
    async deleteUser(user: User) {
      await axios.delete(`/api/users/${user.id}`);
      const index = this.users.findIndex((u) => u.id === user.id);
      this.users.splice(index, 1);
    },
  },
});
