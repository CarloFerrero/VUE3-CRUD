import { defineStore } from "pinia";
import axios from "axios";

export const UserStore = defineStore({
  id: "user",
  state: () => ({
    users: [] as User[],
  }),
  actions: {
    async fetchUsers() {
      const response = await axios.get("http://localhost:3000/users");
      this.users = response.data;
    },
    async createUser(user: User) {
      const response = await axios.post("http://localhost:3000/users", user);
      this.users.push(response.data);
    },
    async updateUser(user: User) {
      await axios.put(`http://localhost:3000/users/${user.id}`, user);
      const index = this.users.findIndex((u) => u.id === user.id);
      this.users.splice(index, 1, user);
    },
    async deleteUser(user: User) {
      await axios.delete(`http://localhost:3000/users/${user.id}`);
      const index = this.users.findIndex((u) => u.id === user.id);
      this.users.splice(index, 1);
    },
  },
});
