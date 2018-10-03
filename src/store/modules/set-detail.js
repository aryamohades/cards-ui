import api from '@/api';

import {
  SET_SET_DATA,
  SET_CARD_DATA,
  SET_CURRENT_SET,
  SET_CARD_DATA_LOADING,
  SET_RARITY_OPTIONS,
  SET_TOTAL_CARDS,
  CLEAR_SET_DATA,
  SET_SET_LOADING
} from '@/store/types';

const state = {
  loading: false,
  set: {}
};

const actions = {
  async readSet({ commit }, route) {
    commit(SET_CARD_DATA_LOADING, {
      loading: true
    });

    commit(SET_SET_LOADING, {
      loading: true
    });

    try {
      const { name } = route.params;

      const { data } = await api({
        route: `/sets/${name}`
      });

      commit(SET_SET_DATA, { data });

      commit(SET_CARD_DATA, {
        cards: data.cards
      });

      commit(SET_TOTAL_CARDS, {
        totalCards: data.cards.length
      });

      commit(SET_CURRENT_SET, {
        set: data.search
      });

      commit(SET_RARITY_OPTIONS, {
        rarities: data.rarities
      });

      commit(SET_CARD_DATA_LOADING, {
        loading: false
      });

      commit(SET_SET_LOADING, {
        loading: false
      });
    } catch (e) {
      commit(SET_CARD_DATA_LOADING, {
        loading: false
      });

      commit(SET_SET_LOADING, {
        loading: false
      });
    }
  },
  clearSetData({ commit }) {
    commit(CLEAR_SET_DATA);
  }
};

const mutations = {
  [SET_SET_DATA](state, action) {
    const { data } = action;

    state.set = data;
  },
  [CLEAR_SET_DATA](state) {
    state.set = {};
  },
  [SET_SET_LOADING](state, action) {
    const { loading } = action;

    state.loading = loading;
  }
};

export default {
  state,
  actions,
  mutations
};
