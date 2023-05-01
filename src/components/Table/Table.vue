<template>
  <Card>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in paginatedUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button @click="editUser(user)">Edit</button>
            <button @click="deleteUser(user)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :total-items="users.length"
      :items-per-page="itemsPerPage"
      :current-page="currentPage"
      @page-change="onPageChange"
    />
  </Card>
</template>

<script>
import Pagination from "../Pagination/Pagination.vue";
import Card from "../Card/Card.vue";
export default {
  components: {
    Pagination,
    Card,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 6,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.users.slice(start, end);
    },
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
    editUser(user) {
      // Implement edit user logic here
    },
    deleteUser(user) {
      // Implement delete user logic here
    },
  },
};
</script>
<style>
table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  padding: 10px;
  border: 1px solid #ccc;
}

table th {
  text-align: left;
  background-color: #f2f2f2;
}

table tbody tr:hover {
  background-color: #f2f2f2;
}

table td button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #2196f3;
  color: #fff;
  cursor: pointer;
}

table td button + button {
  margin-left: 5px;
}
</style>
