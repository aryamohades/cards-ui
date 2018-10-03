<template>
  <div
    v-show="visible"
    @click="backToTop"
    class="back-to-top">
    Back to top
  </div>
</template>

<script>
import debounce from 'debounce';

export default {
  data() {
    return {
      visible: false
    };
  },
  created() {
    window.addEventListener('scroll', debounce(this.scroll, 100));
  },
  methods: {
    backToTop() {
      document.documentElement.scrollTop = 0;
    },
    scroll() {
      this.visible = this.getScrollPosition() > 400;
    },
    getScrollPosition() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }
  }
};
</script>

<style scoped>
.back-to-top {
  cursor: pointer;
  position: fixed;
  z-index: 9999;
  bottom: 15px;
  right: 15px;
  background: rgb(222, 222, 222, 0.7);
  border: 1px solid #aaaaaa;
  padding: 12px 20px;
  border-radius: 2px;
  font-weight: bold;
  transition: background 0.22s ease;
}

.back-to-top:hover {
  background: white;
}
</style>
