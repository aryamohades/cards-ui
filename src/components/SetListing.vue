<template>
  <div class="container">
    <div class="set-search-container">
      <input
        v-if="!loading"
        v-on:input="filterSets"
        type="text"
        placeholder="Search Sets"
        class="set-search-input">
    </div>
    <div class="sets-container">
      <router-link
        v-for="(set, index) in sets"
        :key="index"
        :to="getSetRoute(set.search)"
        class="set-container">
        <div
          class="set-content">
          <div class="set-image-container">
            <img
              :src="set.image"
              class="set-image">
            <img
              v-if="set.firstEdition"
              :src="firstEditionSymbol"
              class="first-edition-symbol">
            </div>
          <div
            v-text="set.name"
            class="set-name">
          </div>
          <div class="set-symbol-container">
            <img
              v-if="set.symbol"
              :src="set.symbol"
              class="set-symbol">
            <img
              v-if="set.firstEdition"
              :src="firstEditionSymbol"
              class="set-symbol">
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex';

import { FIRST_EDITION_SYMBOL } from '@/constants';

export default {
  created() {
    this.listSets();
  },
  data() {
    return {
      firstEditionSymbol: FIRST_EDITION_SYMBOL
    };
  },
  computed: mapState({
    loading: ({ setListing }) => setListing.loading,
    sets: ({ setListing }) => setListing.filteredSets
  }),
  methods: {
    ...mapActions([
      'listSets',
      'filterSets'
    ]),
    getSetRoute(name) {
      return {
        path: `/sets/${name}`
      };
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.set-search-container {
  margin-top: 25px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.set-search-input {
  width: 100%;
  max-width: 375px;
}

.sets-container {
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
}

.set-container {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
}

.set-content {
  background-color: #eff3f6;
  border-radius: 8px;
  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
  border: 1px solid rgba(27,31,35,0.2);
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.set-image-container {
  display: block;
  position: relative;
  margin-bottom: 12px;
}

.set-image {
  height: 110px;
  width: 110px;
}

.set-name {
  color: #555555;
  font-size: 14px;
}

.first-edition-symbol {
  position: absolute;
  bottom: 10px;
  right: 5px;
  height: 30px;
}

.set-symbol-container {
  margin-top: 12px;
  height: 30px;
}

.set-symbol {
  height: 30px;
  margin: 0 6px;
}

@media(max-width: 1200px) {
  .set-container {
    width: 25%;
  }
}

@media(max-width: 992px) {
  .set-container {
    width: 33.33%;
  }
}

@media(max-width: 768px) {
  .set-container {
    width: 50%;
  }
}

@media(max-width: 550px) {
  .set-container {
    width: 100%;
  }
}
</style>
