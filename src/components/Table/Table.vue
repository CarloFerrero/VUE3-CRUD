<template>
  <Card>
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedItems" :key="item.id">
          <td v-for="(column, index) in columns" :key="index">
            <template v-if="column.key === 'actions'">
              <slot name="actions" :item="item" />
            </template>
            <template v-else>
              {{ item[column.key] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :total-items="items.length"
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
    items: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 5,
    },
    editAction: {
      type: Function,
      required: true,
    },
    deleteAction: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.items.slice(start, end);
    },
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
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
  transition: all 0.1s ease-in-out;
  cursor: pointer;
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
