<template>
  <div class="container">
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.sidebar {
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(122, 122, 122, 0.2);
  padding: 25px;
  margin: 3vh 0vh 3vh 3vh;
  height: 94vh;
  width: 20vw;
  max-width: 300px;
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
