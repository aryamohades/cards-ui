<template>
  <router-link
    v-text="action.text"
    v-bind="action"
    class="navbar-action">
  </router-link>
</template>

<script>
export default {
  props: {
    action: {
      type: Object
    }
  }
};
</script>

<style scoped>
.navbar-action {
  width: 100px;
}

.navbar-action:not(:first-child) {
  margin-left: 16px;
}

@media(max-width: 768px) {
  .navbar-action {
    display: none;
  }
}
</style>
