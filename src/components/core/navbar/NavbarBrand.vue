<template>
  <router-link
    :to="{ path: '/' }"
    class="navbar-brand">
    <img
      v-if="image"
      :src="image"
      class="navbar-brand-image">
    <div
      v-if="text"
      v-text="text"
      class="navbar-brand-text">
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    image: {
      type: String
    }
  }
};
</script>

<style scoped>
.navbar-brand {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: #333333 !important;
}

.navbar-brand-image {
  height: 50px;
}

.navbar-brand-text {
  font-weight: bold;
  font-size: 18px;
}

</style>
