<template>
  <div
    v-text="text"
    class="navbar-dropdown-text">
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.navbar-dropdown-text {
  font-size: 13px;
}
</style>
