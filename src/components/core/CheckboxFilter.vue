<template>
  <div
    v-if="show"
    class="filter-group">
    <div
      v-text="filter.title"
      class="filter-option-title">
    </div>
    <div
      :class="containerClass"
      class="filter-options-container">
      <div
        v-if="filter.options"
        v-for="(option, index) in filter.options"
        :key="index"
        class="filter-input-container">
        <input
          :id="option.id"
          v-if="option.change"
          v-on:change="option.change"
          :value="option.value"
          type="checkbox">
        <input
          v-else
          :id="option.id"
          :value="option.value"
          v-model="model"
          type="checkbox">
        <label
          :for="option.id"
          v-text="option.label"
          class="filter-option-label">
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  data() {
    const containerClass = this.filter.scroll
      ? 'scroll'
      : '';

    return {
      containerClass
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
    model: {
      get() {
        return this.filter.get
          ? this.filter.get()
          : null;
      },
      set(val) {
        if (this.filter.set) {
          this.filter.set(val);
        }
      }
    },
    show() {
      return (
        !this.filter.auth ||
        (this.filter.auth && this.isAuthenticated)
      );
    }
  }
};
</script>

<style scoped>
.filter-group {
  margin-bottom: 16px;
}

.filter-option-title {
  margin-bottom: 8px;
  font-weight: bold;
}

.filter-input-container {
  display: flex;
  align-items: center;
  margin: 6px 0;
}

.filter-option-label {
  cursor: pointer;
  line-height: 22px;
  text-transform: capitalize;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

input[type="checkbox"] {
  zoom: 1.25;
  margin-right: 4px;
  -moz-appearance: none;
  cursor: pointer;
}

.filter-options-container.scroll {
  margin-top: 8px;
  border: 1px solid #dedede;
  padding: 6px 10px;
  height: 245px;
  overflow-y: scroll;
}
</style>
