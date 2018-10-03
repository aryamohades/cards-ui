<template>
  <div class="navbar">
    <div class="navbar-section">
      <NavbarBrand v-bind="brand"/>
      <NavbarItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"/>
    </div>
    <div class="navbar-section">
      <NavbarItem
        v-if="auth && isAuthenticated"
        :item="auth"/>
      <NavbarAction
        v-else
        v-for="(action, index) in actions"
        :key="index"
        :action="action"/>
    </div>
    <div
      @click="openMenu"
      class="navbar-open-menu">
      <img src="/static/img/menu.svg">
    </div>
    <div
      :class="menuClass()"
      class="menu">
      <div
        @click="closeMenu"
        class="navbar-close-menu">
        <img src="/static/img/cancel.svg">
      </div>
    </div>
    <div
      @click="closeMenu"
      :class="menuClass()"
      class="overlay"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavbarBrand from '@/components/core/navbar/NavbarBrand';
import NavbarItem from '@/components/core/navbar/NavbarItem';
import NavbarDropdown from '@/components/core/navbar/NavbarDropdown';
import NavbarAction from '@/components/core/navbar/NavbarAction';

export default {
  components: {
    NavbarBrand,
    NavbarItem,
    NavbarDropdown,
    NavbarAction
  },
  created() {
    window.addEventListener('resize', () => {
      if (document.body.clientWidth > 768) {
        this.closeMenu();
      }
    });
  },
  data() {
    return {
      menuOpen: false
    };
  },
  computed: mapGetters(['isAuthenticated']),
  methods: {
    openMenu() {
      this.menuOpen = true;

      document.body.classList.add('menu-open');
    },
    closeMenu() {
      this.menuOpen = false;

      document.body.classList.remove('menu-open');
    },
    menuClass() {
      return {
        active: this.menuOpen
      };
    }
  },
  props: {
    brand: {
      type: Object
    },
    items: {
      type: Array
    },
    actions: {
      type: Array
    },
    auth: {
      type: Object
    }
  }
};
</script>

<style scoped>
.navbar {
  background: #f6f6f6;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
  border-bottom: 1px solid #dedede;
}

.navbar-section {
  height: 100%;
  display: flex;
  align-items: center;
}

.navbar-open-menu {
  align-items: center;
  display: none;
  cursor: pointer;
  padding: 5px;
}

.navbar-close-menu {
  align-items: center;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  padding: 5px;
  padding-top: 15px;
  padding-right: 15px;
}

.navbar-open-menu > img {
  width: 25px;
  height: 25px;
}

.navbar-close-menu > img {
  height: 20px;
  width: 20px;
}

.menu {
  opacity: 0;
  pointer-events: none;
  position: relative;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  box-shadow:
    0 50px 100px rgba(50,50,93,.1),
    0 15px 35px rgba(50,50,93,.15),
    0 5px 15px rgba(0,0,0,.1);
  height: 500px;
  z-index: 9999;
  background: #f7f7f7;
  transform: scale3d(.5, .5, .5);
  transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.menu.active {
  opacity: 1;
  pointer-events: initial;
  transform: scale3d(1, 1, 1);
}

@media(max-width: 768px) {
  .navbar {
    padding-right: 25px;
  }

  .navbar-open-menu {
    display: flex;
  }
}
</style>
