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
    <Table :users="filteredUsers" :page="page" :perPage="perPage" />
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
import Table from "../components/Table/Table.vue";
import Card from "../components/Card/Card.vue";
import { users } from "../data/users";

export default defineComponent({
  components: {
    Table,
    Card,
  },

  setup() {
    const router = useRouter();
    const search = ref("");
    const page = ref(1);
    const perPage = ref(5);
    const filteredUsers = computed(() =>
      users.filter(
        (user) =>
          user.username.toLowerCase().includes(search.value.toLowerCase()) ||
          user.email.toLowerCase().includes(search.value.toLowerCase())
      )
    );

    const pageChanged = (newPage) => {
      page.value = newPage;
    };

    return {
      search,
      page,
      perPage,
      filteredUsers,
      pageChanged,
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
