<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link to="/" class="navbar-link">Home</router-link>
      <router-link to="/create" class="navbar-link">Create</router-link>
      <router-link to="/edit" class="navbar-link">Edit</router-link>
    </div>
    <div class="navbar-right">
      <div class="navbar-user">
        <img :src="avatarUrl" alt="User Avatar" class="navbar-avatar" />
        <span class="navbar-name">{{ username }}</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      avatarUrl: "https://via.placeholder.com/50x50", // replace with actual avatar URL
      username: "John Doe", // replace with actual username
    };
  },
};
</script>

<style>
.navbar {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  flex-direction: row !important;
  box-shadow: 0 10px 10px rgba(180, 180, 180, 0.1);
  color: #000;
  padding: 15px 20px;
  border-radius: 0px 0px 0px 0px;
}

.navbar-link {
  color: #000;
  margin-right: 20px;
  text-decoration: none;
  font-size: 18px;
}

.navbar-link:hover {
  text-decoration: underline;
}

.navbar-user {
  display: flex;
  align-items: center;
}

.navbar-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.navbar-name {
  font-size: 18px;
  font-weight: bold;
}
</style>
