<template>
  <i
    v-if="icon"
    :class="iconClass(icon)"
    class="navbar-dropdown-icon fas">
  </i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    }
  },
  methods: {
    iconClass(icon) {
      return `fa-${icon}`;
    }
  }
};
</script>

<style scoped>
.navbar-dropdown-icon {
  color: #222222;
  margin-right: 12px;
  transition: color 0.15s ease;
}
</style>
