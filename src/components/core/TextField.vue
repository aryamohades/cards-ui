<template>
  <div class="form-input">
    <div
      v-if="label"
      v-text="label"
      class="form-input-label">
    </div>
    <input
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :max="max"
      :min="min"
      :value="value"
      v-on:input="handleInput">
    <div
      v-if="error"
      v-text="error"
      class="form-field-error">
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';

export default {
  props: {
    module: {
      type: String,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text',
      validate: (val) => (
        val === 'text' || val === 'number'
      )
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    maxlength: {
      type: Number,
      validate: (val) => (
        val > 0
      )
    },
    max: {
      type: Number
    },
    min: {
      type: Number
    }
  },
  methods: {
    ...mapActions({
      setFormFieldValue(dispatch, payload) {
        return dispatch(
          `${this.module}/setFormFieldValue`,
          payload
        );
      }
    }),
    handleInput(e) {
      const { value } = e.target;

      this.setFormFieldValue({
        field: this.field,
        value
      });
    }
  },
  computed: mapState({
    value(state) {
      return state[this.module].values[this.field];
    },
    error(state) {
      return state[this.module].fieldErrors[this.field];
    }
  })
};
</script>
