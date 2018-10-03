<template>
  <div class="cards-container">
    <div
      v-if="loading"
      class="loader">
    </div>
    <Card
      v-else
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from '@/components/Card';

export default {
  components: {
    Card
  },
  computed: mapState({
    loading: ({ cards }) => cards.loading,
    cards: ({ cards }) => cards.cards
  })
};
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: flex-start;
}
</style>
