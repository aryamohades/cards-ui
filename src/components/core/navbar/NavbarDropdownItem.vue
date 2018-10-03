<template>
  <div
    :class="itemClass(item)"
    class="navbar-dropdown-item">
    <router-link
      v-if="item.type === 'link'"
      :to="item.to"
      class="navbar-dropdown-item-content">
      <NavbarDropdownIcon :icon="item.icon"/>
      <span v-text="item.text"></span>
    </router-link>
    <div
      v-else-if="item.type === 'action-link'"
      class="navbar-dropdown-item-content navbar-action-link"
      @click="item.click">
      <router-link :to="item.to">
        <NavbarDropdownIcon :icon="item.icon"/>
        <span v-text="item.text"></span>
      </router-link>
    </div>
    <div
      v-else-if="item.type === 'action'"
      @click="item.click"
      class="navbar-dropdown-item-content">
      <NavbarDropdownIcon :icon="item.icon"/>
      <div v-text="item.text"></div>
    </div>
  </div>
</template>

<script>
import NavbarDropdownIcon from '@/components/core/navbar/NavbarDropdownIcon';

export default {
  components: {
    NavbarDropdownIcon
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    itemClass(item) {
      return {
        [item.class]: true,
        'border-top': item.borderTop
      };
    }
  }
};
</script>

<style scoped>
.navbar-dropdown-item {
  cursor: pointer;
  transition: background-color .15s ease;
}

.navbar-dropdown-item:hover {
  background-color: #eeeeee;
}

.navbar-dropdown-item-content {
  padding: 16px 16px;
  display: flex;
  align-items: center;
}

.navbar-action-link {
  padding: 0;
}

.navbar-action-link > a {
  width: 100%;
  padding: 16px 16px;
}

.navbar-dropdown-item.border-top {
  border-top: 1px solid #e9e9e9;
}
</style>
