<template>
  <img
    v-if="image"
    :src="imageSrc"
    class="navbar-dropdown-image">
</template>

<script>
export default {
  props: {
    image: {
      type: [String, Function]
    }
  },
  data() {
    const imageSrc = typeof this.image === 'function'
      ? this.image()
      : this.image;

    return {
      imageSrc
    };
  }
};
</script>

<style scoped>
.navbar-dropdown-image {
  width: 35px;
  height: 35px;
  border-radius: 9999px;
  margin-right: 12px;
}
</style>
