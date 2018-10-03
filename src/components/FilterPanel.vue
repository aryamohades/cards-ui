<template>
  <div class="filter-container">
    <div
      v-show="!loading"
      class="filter-content">
      <router-link
        v-if="back"
        :to="back.to"
        class="back">
        <i class="fas fa-chevron-left"></i>
        <span v-text="back.text"></span>
      </router-link>
      <img
        :src="image"
        class="filter-image">
      <div
        v-if="altImages"
        class="filter-alt-images">
        <img
          v-for="(image, index) in altImages"
          :key="index"
          :src="image"
          class="filter-alt-image">
      </div>
      <div
        v-if="title || info"
        class="filter-info-container">
        <div
          v-if="title"
          v-text="title"
          class="filter-title">
        </div>
        <div
          v-if="info"
          v-for="(item, index) in info"
          :key="index"
          class="filter-metadata">
          <span
            v-text="item.label"
            class="filter-info-label">
          </span>
          <span v-text="item.text"></span>
        </div>
      </div>
      <div class="filter-options-container">
        <div
          v-for="(filter, index) in filters"
          :key="index">
          <CheckboxFilter
            v-if="filter.type === 'checkbox'"
            :filter="filter"/>
          <TextFilter
            v-if="filter.type === 'text'"
            :filter="filter"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CheckboxFilter from '@/components/core/CheckboxFilter';
import TextFilter from '@/components/core/TextFilter';

export default {
  components: {
    CheckboxFilter,
    TextFilter
  },
  props: {
    back: {
      type: Object
    },
    image: {
      type: String
    },
    altImages: {
      type: Array
    },
    title: {
      type: String
    },
    info: {
      type: Array
    },
    filters: {
      type: Array
    }
  },
  computed: mapState({
    loading: ({ setDetail }) => setDetail.loading
  })
};
</script>

<style scoped>
.filter-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-right: 1px solid #dedede;
  width: 245px;
  background: #f6f6f6;
}

.filter-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.back {
  padding-top: 12px;
  padding-left: 14px;
  padding-bottom: 4px;
  padding-right: 4px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 13px;
  color: #999999;
  font-weight: 600;
  transition: color 0.22s ease;
}

.back > i {
  margin-right: 4px;
}

.back:hover {
  color: #111111;
}

.filter-image {
  width: 110px;
  margin-bottom: 12px;
  margin-top: 25px;
}

.filter-alt-image {
  height: 30px;
  margin: 0 4px;
}

.filter-info-container {
  margin-top: 25px;
}

.filter-title {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 8px;
}

.filter-metadata {
  font-size: 13px;
}

.filter-info-label {
  font-weight: bold;
}

.filter-options-container {
  width: 100%;
  font-size: 13px;
  margin-top: 25px;
}
</style>
