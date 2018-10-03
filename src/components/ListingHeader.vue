<template>
  <div>
    <div class="container">
      <div
        v-text="title"
        class="title">
      </div>
      <div class="options-container">
        <span class="option-label">Sort</span>
        <div class="sort-container">
          <div class="button sort-option-selected">
            <span v-text="sort"></span>
            <div>
              <i class="fas fa-caret-down"></i>
            </div>
          </div>
          <div class="sort-options">
            <div
              v-for="(option, index) in sortOptions"
              :key="index"
              @click="handleSortChanged(option)"
              class="sort-option">
              <div
                v-if="isSortSelected(option)"
                class="sort-icon-selected">
                <i class="fas fa-check"></i>
              </div>
              <span v-text="option"></span>
            </div>
          </div>
        </div>
        <span class="option-label">View</span>
        <div class="view-options">
          <div class="button view-option">
            <i class="fas fa-th-large"></i>
          </div>
          <div class="button view-option">
            <i class="fas fa-list-ul"></i>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex';

export default {
  computed: mapState({
    sort: ({ cards }) => cards.sort,
    sortOptions: ({ cards }) => cards.sortOptions
  }),
  methods: {
    ...mapActions([
      'setSort',
      'getCards'
    ]),
    handleSortChanged(value) {
      this.setSort(value);
      this.getCards();
    },
    isSortSelected(value) {
      return this.sort === value;
    }
  },
  props: {
    title: {
      type: String,
      required: false,
      defaultValue: ''
    }
  }
};
</script>

<style scoped>
.container {
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
}

.title {
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;
}

.options-container {
  display: flex;
  align-items: center;
}

.option-label {
  font-size: 12px;
  margin-right: 8px;
  color: #888;
}

.sort-container {
  height: 35px;
  position: relative;
  margin-right: 12px;
  font-size: 13px;
}

.sort-option-selected {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 35px;
  border: 1px solid #cccccc;
  background: #f6f6f6;
}

.sort-icon-selected {
  color: #0654ba;
  position: absolute;
  left: 10px;
}

.sort-option-selected > div {
  font-size: 14px;
  margin-left: 6px;
}

.sort-container:hover .sort-options {
  display: block;
}

.view-options {
  display: flex;
}

.view-option {
  height: 35px;
  width: 35px;
  color: #333;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-option:first-child {
  margin-left: 0;
}

.sort-options {
  box-shadow: 0 3px 7px rgba(0,0,0,0.15);
  border: 1px solid #ccc;
  position: absolute;
  z-index: 9999;
  top: 35px;
  right: 0;
  background: #f5f5f5;
  width: 175px;
  border-radius: 4px;
  display: none;
}

.sort-option {
  display: flex;
  align-items: center;
  position: relative;
  color: #777;
  padding: 12px 0;
  padding-left: 35px;
  cursor: pointer;
  transition: all .2s ease;
}

.sort-option:hover {
  background: #eaeaea;
}

@media(max-width: 992px) {
  .title {
    font-size: 18px;
  }
}

@media(max-width: 768px) {
  .title {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }

  .container {
    flex-direction: column;
  }

  .options-container {
    justify-content: center;
  }
}
</style>
