<template>
  <div class="card-container">
    <img
      :src="image"
      class="card-image">
    <div class="card-info">
      <div
        v-text="name"
        class="card-name">
      </div>
      <div class="card-metadata">
        <router-link
          :to="getSetRoute(series.search)"
          class="card-series">
          <span v-text="series.name"></span>
        </router-link>
        <span v-text="numberText"></span>
        <div
          v-if="rarity"
          v-text="rarity.type"
          class="card-rarity">
        </div>
      </div>
    </div>
    <CardActionContainer v-bind="cardActionProps"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CardActionContainer from '@/components/CardActionContainer';

export default {
  components: {
    CardActionContainer
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    series: {
      type: Object,
      required: true
    },
    numberText: {
      type: String,
      required: true
    },
    rarity: {
      type: Object,
      required: true
    }
  },
  data() {
    const cardActionProps = {
      actions: [
        {

          text: 'Collection',
          icon: 'plus',
          onClick: this.addToCollection.bind(null, this.id)
        },
        {
          text: 'Wishlist',
          icon: 'star',
          onClick: () => {}
        }
      ]
    };

    return {
      cardActionProps
    };
  },
  methods: {
    ...mapActions(['addToCollection']),
    getSetRoute(name) {
      return {
        path: `/sets/${name}`
      };
    }
  }
};
</script>

<style scoped>
.card-name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
}

.card-info {
  display: flex;
  text-align: center;
  flex-direction: column;
}

.card-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.33%;
  padding: 25px;
  border: 1px solid #dedede;
  background: #f6f6f6;
}

@media(max-width: 992px) {
  .card-container {
    width: 50%;
  }
}

@media(max-width: 768px) {
  .card-container {
    width: 100%;
  }
}

.card-image {
  max-height: 325px;
  margin-bottom: 12px;
}

.card-metadata {
  font-size: 14px;
  justify-content: center
}

.card-metadata > div {
  margin: 0 6px;
}

.card-rarity {
  text-transform: capitalize;
}

.card-series {
  text-decoration: underline;
}

.card-series:hover {
  color: #0654ba;
}
</style>
