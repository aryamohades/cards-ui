<template>
  <div class="navbar-dropdown">
    <NavbarDropdownImage :image="image"/>
    <NavbarDropdownText :text="text"/>
    <div
      :class="anchorClass"
      class="navbar-dropdown-content">
      <NavbarDropdownItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"/>
    </div>
  </div>
</template>

<script>
import NavbarDropdownText from '@/components/core/navbar/NavbarDropdownText';
import NavbarDropdownImage from '@/components/core/navbar/NavbarDropdownImage';
import NavbarDropdownItem from '@/components/core/navbar/NavbarDropdownItem';
import NavbarDropdownIcon from '@/components/core/navbar/NavbarDropdownIcon';

export default {
  components: {
    NavbarDropdownText,
    NavbarDropdownImage,
    NavbarDropdownItem,
    NavbarDropdownIcon
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    anchor: {
      type: String,
      default: 'left'
    }
  },
  methods: {
    itemClass(item) {
      return {
        [item.class]: true,
        'border-top': item.borderTop
      };
    },
    iconClass(icon) {
      return `fa-${icon}`;
    }
  },
  data() {
    const anchorClass = this.anchor === 'left'
      ? 'anchor-left'
      : 'anchor-right';

    return {
      anchorClass
    };
  }

};
</script>

<style scoped>
.navbar-dropdown {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #333333;
  font-weight: 600;
}

.navbar-dropdown-content {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  background-color: #f9f9f9;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
  min-width: 160px;
  transform: translateY(50px);
  top: 0;
  border-radius: 3px;
  transition: opacity .11s ease, transform .2s ease;
}

.navbar-dropdown-content.anchor-left {
  left: 0;
}

.navbar-dropdown-content.anchor-right {
  right: 0;
}

.navbar-dropdown:hover .navbar-dropdown-content {
  pointer-events: initial;
  opacity: 1;
  transform: translateY(60px);
}
</style>
