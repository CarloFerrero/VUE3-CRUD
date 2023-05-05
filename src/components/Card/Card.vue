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
  overflow-x: hidden;
}
</style>
