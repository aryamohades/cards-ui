<template>
  <router-link
    :to="to"
    v-text="text">
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
    }
  }
};
</script>
