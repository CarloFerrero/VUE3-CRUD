<template>
  <div class="container">
    <div class="sidebar">
      <Navbar />
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.sidebar {
  width: 100%;
}

.content {
  flex: 1;
  margin: 3vh;
}

nav {
  display: flex;
  flex-direction: column;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

li {
  margin-bottom: 10px;
}

a {
  color: black;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #ff6347;
}
</style>
