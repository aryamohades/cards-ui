<template>
  <div
    v-if="!loading && totalPages"
    class="container">
    <hr v-if="bottom">
    <div
      :class="containerClass"
      class="paging-container">
      <div
        @click="previous"
        class="page-control previous">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="pages">
        <div
          v-for="n in range(lo, hi)"
          :key="n"
          :class="pageButtonClass(n)"
          v-text="n"
          @click="page(n)"
          class="page-button">
        </div>
      </div>
      <div
        @click="next"
        class="page-control next">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';

export default {
  props: [
    'top',
    'bottom'
  ],
  data() {
    return {
      containerClass: {
        top: this.top,
        bottom: this.bottom
      }
    };
  },
  computed: mapState({
    loading: ({ cards }) => cards.loading,
    currentPage: ({ cards }) => cards.currentPage,
    totalPages: ({ cards }) => cards.totalPages,
    lo: ({ cards }) => Math.max(cards.currentPage - 4, 1),
    hi: ({ cards }) => Math.min(cards.currentPage + 4, cards.totalPages)
  }),
  methods: {
    ...mapActions([
      'setCurrentPage',
      'getCards'
    ]),
    reloadCards() {
      this.getCards();
      this.scrollToTop();
    },
    page(n) {
      this.setCurrentPage(n);
      this.reloadCards();
    },
    next() {
      this.setCurrentPage(Math.min(this.currentPage + 1, this.hi));
      this.reloadCards();
    },
    previous() {
      this.setCurrentPage(Math.max(this.currentPage - 1, this.lo));
      this.reloadCards();
    },
    scrollToTop() {
      if (this.bottom) {
        document.documentElement.scrollTop = 0;
      }
    },
    range(start, end) {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
    },
    pageButtonClass(n) {
      return {
        active: n === this.currentPage
      };
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.paging-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.page-control {
  cursor: pointer;
  font-size: 22px;
  color: #656565;
  transition: color .2s ease;
  padding: 4px;
}

.page-control:hover {
  color: #0654ba;
}

.previous {
  left: 0;
}

.next {
  right: 0;
}

.pages {
  display: flex;
  margin: 0 10px;
}

.page-button {
  color: #0654ba;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 30px;
  width: 30px;
  border-radius: 2px;
}

.page-button:hover {
  text-decoration: underline;
}

.page-button.active {
  border: 1px solid #aaa;
  background: #dedede;
}

.top {
  margin-bottom: 25px;
}

.bottom {
  margin-top: 25px;
}
</style>
