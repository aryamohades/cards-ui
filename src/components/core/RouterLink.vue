<template>
  <router-link
    v-text="text"
    :to="to"
    :class="className"
    class="router-link">
  </router-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: [String, Object],
      required: true
    },
    className: {
      type: String
    }
  }
};
</script>
