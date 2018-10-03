<template>
  <button
    v-text="text"
    :class="className"
    :disabled="disabled"
    type="submit"
    class="button button-primary submit-button">
  </button>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    module: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: mapState({
    disabled(state) {
      return state[this.module].loading;
    }
  })
};
</script>

<style scoped>
.submit-button {
  font-size: 16px;
  width: 100%;
  padding: 20px 30px;
  margin-top: 12px;
}
</style>
