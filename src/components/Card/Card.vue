<template>
  <div class="card">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style>
.card {
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(122, 122, 122, 0.2);
  padding: 25px;
}
</style>
