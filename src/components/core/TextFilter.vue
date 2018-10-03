<template>
  <div class="filter-group">
    <div class="filter-header">
      <div
        v-text="filter.title"
        class="filter-option-title">
      </div>
      <span
        @click="filter.clear"
        class="fa-layers fa-fw filter-clear-container">
        <i class="fas fa-circle filter-clear-background"></i>
        <i
          class="fa-inverse fas fa-times filter-clear-foreground"
          data-fa-transform="shrink-6">
        </i>
      </span>
    </div>
    <form
      v-on:submit.prevent="filter.filter"
      novalidate>
      <input
        v-model="model"
        type="text"
        class="filter-text-input">
      <button
        type="submit"
        class="button button-primary filter-button"
        v-text="filter.submitText">
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  computed: {
    model: {
      get() {
        return this.filter.get();
      },
      set(val) {
        this.filter.set(val);
      }
    }
  }
};
</script>

<style scoped>
.filter-group {
  margin-bottom: 16px;
}

.filter-option-title {
  font-weight: bold;
  margin-right: 6px;
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

.filter-button {
  margin-top: 8px;
  width: 90px;
}

.filter-text-input {
  height: 30px;
  width: 100%;
}

.filter-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.filter-clear-container {
  font-size: 15px;
  cursor: pointer;
}

.filter-clear-background {
  color: #888888;
  transition: color 0.22s ease;
}

.filter-clear-container:hover > .filter-clear-background {
  color: #333333;
}
</style>
