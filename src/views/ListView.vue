<template>
  <h2 class="h2 mb10">Users</h2>
  <div class="flex-col">
    <Card>
      <div class="d-flex justify-content-between">
        <div class="search-box">
          <input
            type="text"
            v-model="search"
            class="form-control"
            placeholder="Search users..."
          />
        </div>
        <div>
          <router-link :to="{ name: 'create' }" class="btn btn-primary"
            >Add User</router-link
          >
        </div>
      </div>
    </Card>
    <Table :items="filteredUsers" :columns="tableColumns">
      <template v-slot:actions="{ item }">
        <button @click="editUser(item)">Edit</button>
        <modal
          :show="showModal"
          :message="`Are you sure you want to delete ${item.username}?`"
          :confirm-button-text="'Conferma'"
          :cancel-button-text="'Annulla'"
          :confirm-delete="deleteItem"
          :close-modal="closeModal"
          :item="item"
        ></modal>
      </template>
    </Table>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
import Table from "../components/Table/Table.vue";
import Card from "../components/Card/Card.vue";
import Modal from "../components/Modal/Modal.vue";
import { users } from "../data/users";

export default defineComponent({
  components: {
    Table,
    Card,
    Modal,
  },
  setup() {
    const router = useRouter();
    const search = ref("");
    const tableColumns = ref([
      { label: "ID", key: "id" },
      { label: "Username", key: "username" },
      { label: "Email", key: "email" },
      { label: "Actions", key: "actions" },
    ]);

    const filteredUsers = computed(() =>
      users.filter(
        (user) =>
          user.username.toLowerCase().includes(search.value.toLowerCase()) ||
          user.email.toLowerCase().includes(search.value.toLowerCase())
      )
    );

    const editUser = (user) => {
      router.push({ name: "edit", params: { id: user.id } });
    };

    const deleteItem = async (user) => {
      // await userStore.deleteUser(user);
      closeModal();
    };

    const closeModal = () => {
      showModal = false;
      modalMessage = "";
      confirmButtonText = "";
      cancelButtonText = "";
      itemToDelete = null;
    };

    return {
      search,
      tableColumns,
      filteredUsers,
      editUser,
      deleteItem,
      closeModal,
    };
  },
});
</script>

<style>
.d-flex {
  display: flex;
}
.justify-content-between {
  justify-content: space-between;
  align-items: center;
}
.search-box {
  width: 50%;
}
.form-control {
  width: 100%;
}
.h1 {
  margin-top: 20px;
  margin-bottom: 20px;
}
.table {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}
.action-icon {
  margin-right: 10px;
  cursor: pointer;
}
.flex-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
