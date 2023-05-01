<template>
  <div class="pagination">
    <button :disabled="page === 1" @click="prevPage">Previous</button>
    <span>{{ page }} / {{ totalPages }}</span>
    <button :disabled="page === totalPages" @click="nextPage">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    totalItems: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    page() {
      return this.currentPage;
    },
  },
  methods: {
    nextPage() {
      this.$emit("page-change", this.page + 1);
    },
    prevPage() {
      this.$emit("page-change", this.page - 1);
    },
  },
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 0;
}

.pagination button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #2196f3;
  color: #fff;
  cursor: pointer;
}

.pagination button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
