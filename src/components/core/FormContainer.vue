<template>
  <form
    v-on:submit.prevent="submit"
    novalidate
    class="form">
    <slot></slot>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    module: {
      type: String,
      required: true
    }
  },
  beforeMount() {
    this.clearForm();
  },
  methods: mapActions({
    submit(dispatch, payload) {
      return dispatch(`${this.module}/submit`, payload);
    },
    clearForm(dispatch, payload) {
      return dispatch(`${this.module}/clearForm`, payload);
    }
  })
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
