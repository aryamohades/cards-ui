<template>
  <div class="container">
    <BackToTop/>
    <FilterPanel v-bind="filterProps"/>
    <div class="content">
      <ListingHeader :title="setName"/>
      <CardTotal/>
      <Cards/>
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex';

import ListingHeader from '@/components/ListingHeader';
import CardTotal from '@/components/CardTotal';
import FilterPanel from '@/components/FilterPanel';
import Cards from '@/components/Cards';
import BackToTop from '@/components/BackToTop';
import { FIRST_EDITION_SYMBOL } from '@/constants';

export default {
  components: {
    BackToTop,
    Cards,
    CardTotal,
    FilterPanel,
    ListingHeader
  },
  created() {
    this.readSet(this.$route);
  },
  computed: mapState({
    setName: ({ setDetail }) => setDetail.set.name,
    filterProps({ cards, setDetail }) {
      const {
        rarityOptions,
        rarityFilter,
        keyword
      } = cards;

      const { set } = setDetail;

      const altImages = [];

      if (set.symbol) {
        altImages.push(set.symbol);
      }

      if (set.firstEdition) {
        altImages.push(FIRST_EDITION_SYMBOL);
      }

      return {
        back: {
          to: { name: 'sets' },
          text: 'Back to all sets'
        },
        image: set.image,
        altImages,
        title: set.name,
        info: [
          {
            label: 'Release: ',
            text: set.release
          },
          {
            label: 'Size: ',
            text: `${set.size} Cards`
          }
        ],
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
    'readSet',
    'getCards',
    'setKeyword',
    'setRarityFilter',
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
