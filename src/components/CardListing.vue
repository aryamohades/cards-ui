<template>
  <div class="container">
    <BackToTop/>
    <FilterPanel v-bind="filterProps"/>
    <div class="content">
      <ListingHeader :title="'Explore Cards'"/>
      <CardTotal/>
      <CardPaging
        v-if="!setView"
        :top="true"/>
      <Cards/>
      <CardPaging :bottom="true"/>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';

import Cards from '@/components/Cards';
import CardPaging from '@/components/CardPaging';
import CardTotal from '@/components/CardTotal';
import ListingHeader from '@/components/ListingHeader';
import BackToTop from '@/components/BackToTop';
import FilterPanel from '@/components/FilterPanel';
import { POKEMON_TCG_LOGO } from '@/constants';

export default {
  components: {
    Cards,
    CardPaging,
    CardTotal,
    ListingHeader,
    BackToTop,
    FilterPanel
  },
  created() {
    if (!this.setsLoaded) {
      this.loadSets();
    }

    this.getCards();
  },
  computed: mapState({
    setsLoaded: ({ cards }) => cards.setsLoaded,
    setView: ({ cards }) => cards.setView,
    filterProps({ cards }) {
      const {
        rarityOptions,
        rarityFilter,
        setOptions,
        setFilter,
        keyword
      } = cards;

      return {
        image: POKEMON_TCG_LOGO,
        filters: [
          {
            type: 'text',
            title: 'Name',
            submitText: 'Search',
            get: () => keyword,
            set: this.setKeyword,
            filter: () => this.getCards(true),
            clear: () => this.setKeyword('')
          },
          {
            type: 'checkbox',
            title: 'Rarity',
            get: () => rarityFilter,
            set: (val) => {
              this.setRarityFilter(val);
              this.getCards(true);
            },
            options: rarityOptions.map((rarity, index) => ({
              id: `rarity-${index}`,
              value: rarity.type,
              label: rarity.type
            }))
          },
          {
            type: 'checkbox',
            title: 'Set',
            scroll: true,
            get: () => setFilter,
            set: (val) => {
              this.setSetFilter(val);
              this.getCards(true);
            },
            options: setOptions.map((set, index) => ({
              id: `set-${index}`,
              value: set.search,
              label: set.name
            }))
          },
          {
            type: 'checkbox',
            title: 'My Cards',
            auth: true,
            options: [
              {
                id: 'checkbox-collection',
                label: 'Collection',
                change: (e) => {
                  const { checked } = e.target;

                  this.setInCollection(checked);
                  this.getCards(true);
                }
              },
              {
                id: 'checkbox-wishlist',
                label: 'Wishlist',
                change: (e) => {
                  const { checked } = e.target;

                  this.setInWishlist(checked);
                  this.getCards(true);
                }
              }
            ]
          }
        ]
      };
    }
  }),
  methods: mapActions([
    'getCards',
    'loadSets',
    'setKeyword',
    'setRarityFilter',
    'setSetFilter',
    'setInCollection',
    'setInWishlist'
  ])
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
}

.content {
  flex: 1;
  padding: 25px;
  background: #efefef;
}
</style>
