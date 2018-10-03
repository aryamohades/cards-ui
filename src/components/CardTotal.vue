<template>
  <div
    v-if="!loading && totalCards"
    class="card-count-label">
    <span
      v-text="totalCards"
      class="card-count-text">
    </span>
    <span> Cards</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    loading: ({ cards }) => cards.loading,
    totalCards: ({ cards }) => cards.totalCards
  })
};
</script>

<style scoped>
.card-count-label {
  font-size: 18px;
  margin: 30px 0;
}

.card-count-text {
  font-weight: bold;
}
</style>
