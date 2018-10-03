<template>
  <div
    v-if="error"
    v-text="error"
    class="form-error">
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    module: {
      type: String,
      required: true
    }
  },
  computed: mapState({
    error(state) {
      return state[this.module].error;
    }
  })
};
</script>

<style scoped>
.form-error {
  text-align: center;
  padding: 8px 0;
  margin-bottom: 12px;
  color: #e84118;
}
</style>
