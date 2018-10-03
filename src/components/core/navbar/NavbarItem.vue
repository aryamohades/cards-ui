<template>
  <div class="navbar-item">
    <NavbarLink
      v-if="item.type === 'link'"
      v-bind="item"/>
    <NavbarDropdown
      v-else-if="item.type === 'dropdown'"
      v-bind="item"/>
  </div>
</template>

<script>
import NavbarLink from '@/components/core/navbar/NavbarLink';
import NavbarDropdown from '@/components/core/navbar/NavbarDropdown';

export default {
  components: {
    NavbarLink,
    NavbarDropdown
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.navbar-item {
  color: #333333;
  font-weight: 600;
  font-size: 13px;
  height: 100%;
  padding: 4px 12px;
  margin: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media(max-width: 768px) {
  .navbar-item {
    display: none;
  }
}
</style>
