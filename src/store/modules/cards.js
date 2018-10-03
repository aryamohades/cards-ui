import api from '@/api';

import {
  SET_CARD_DATA_LOADING,
  SET_CARD_DATA,
  SET_SORT,
  SET_KEYWORD,
  SET_RARITY_FILTER,
  SET_SET_FILTER,
  SET_CURRENT_SET,
  SET_RARITY_OPTIONS,
  SET_IN_WISHLIST,
  SET_IN_COLLECTION,
  SET_SET_OPTIONS,
  SET_TOTAL_PAGES,
  SET_CURRENT_PAGE,
  SET_TOTAL_CARDS,
  SET_SET_VIEW,
  RESET_DATA
} from '@/store/types';

import {
  ALL_RARITIES,
  DEFAULT_CARD_SORT,
  DEFAULT_SET_SORT,
  SET_SORT_OPTIONS,
  CARD_SORT_OPTIONS
} from '@/constants';

const state = {
  setView: false,
  currentPage: 1,
  totalPages: null,
  loading: false,
  cards: [],
  totalCards: null,
  set: null,
  keyword: '',
  sort: null,
  setFilter: [],
  rarityFilter: [],
  rarityOptions: [],
  setOptions: [],
  sortOptions: [],
  inCollection: false,
  inWishlist: false,
  setsLoaded: false
};

const actions = {
  async getCards({ commit }, resetPage) {
    commit(SET_CARD_DATA_LOADING, {
      loading: true
    });

    if (resetPage) {
      commit(SET_CURRENT_PAGE, { value: 1 });
    }

    try {
      const params = {
        page: state.currentPage,
        sort: state.sort.toLowerCase()
      };

      if (state.rarityFilter.length > 0) {
        params.rarity = state.rarityFilter.join(',');
      }

      if (state.setFilter.length > 0) {
        params.sets = state.setFilter.join(',');
      }

      if (state.set) {
        params.set = state.set;
      }

      if (state.keyword !== '') {
        params.keyword = state.keyword;
      }

      if (state.inCollection) {
        params.collection = true;
      }

      if (state.inWishlist) {
        params.wishlist = true;
      }

      const { data } = await api({
        route: '/cards',
        params
      });

      commit(SET_CARD_DATA, {
        cards: data.items
      });

      commit(SET_TOTAL_CARDS, {
        totalCards: data.total
      });

      commit(SET_TOTAL_PAGES, {
        totalPages: data.pages
      });

      commit(SET_CARD_DATA_LOADING, {
        loading: false
      });
    } catch (e) {
      commit(SET_CARD_DATA_LOADING, {
        loading: false
      });
    }
  },
  async loadSets({ commit }) {
    try {
      const { data } = await api({
        route: '/sets'
      });

      commit(SET_SET_OPTIONS, {
        sets: data
      });
    } catch (e) {
      // pass
    }
  },
  setRarityFilter({ commit }, value) {
    commit(SET_RARITY_FILTER, { value });
  },
  setSetFilter({ commit }, value) {
    commit(SET_SET_FILTER, { value });
  },
  setKeyword({ commit }, value) {
    commit(SET_KEYWORD, { value });
  },
  setInWishlist({ commit }, value) {
    commit(SET_IN_WISHLIST, { value });
  },
  setInCollection({ commit }, value) {
    commit(SET_IN_COLLECTION, { value });
  },
  setSort({ commit }, value) {
    commit(SET_SORT, { value });
  },
  setCurrentPage({ commit }, value) {
    commit(SET_CURRENT_PAGE, { value });
  },
  setSetView({ commit }, value) {
    commit(SET_SET_VIEW, { value });
  },
  resetData({ commit }) {
    commit(RESET_DATA, {
      rarities: state.setView ? [] : ALL_RARITIES,
      sort: state.setView ? DEFAULT_SET_SORT : DEFAULT_CARD_SORT,
      sortOptions: state.setView ? SET_SORT_OPTIONS : CARD_SORT_OPTIONS
    });
  }
};

const mutations = {
  [SET_CARD_DATA_LOADING](state, action) {
    const { loading } = action;

    state.loading = loading;
  },
  [SET_CARD_DATA](state, action) {
    const { cards } = action;

    state.cards = cards;
  },
  [SET_SORT](state, action) {
    const { value } = action;

    state.sort = value;
  },
  [SET_RARITY_FILTER](state, action) {
    const { value } = action;

    state.rarityFilter = value;
  },
  [SET_SET_FILTER](state, action) {
    const { value } = action;

    state.setFilter = value;
  },
  [SET_IN_WISHLIST](state, action) {
    const { value } = action;

    state.inWishlist = value;
  },
  [SET_IN_COLLECTION](state, action) {
    const { value } = action;

    state.inCollection = value;
  },
  [SET_KEYWORD](state, action) {
    const { value } = action;

    state.keyword = value;
  },
  [SET_CURRENT_SET](state, action) {
    const { set } = action;

    state.set = set;
  },
  [SET_RARITY_OPTIONS](state, action) {
    const { rarities } = action;

    state.rarityOptions = rarities;
  },
  [SET_SET_OPTIONS](state, action) {
    const { sets } = action;

    state.setOptions = sets;
    state.setsLoaded = true;
  },
  [SET_TOTAL_PAGES](state, action) {
    const { totalPages } = action;

    state.totalPages = totalPages;
  },
  [SET_CURRENT_PAGE](state, action) {
    const { value } = action;

    state.currentPage = value;
  },
  [SET_TOTAL_CARDS](state, action) {
    const { totalCards } = action;

    state.totalCards = totalCards;
  },
  [SET_SET_VIEW](state, action) {
    const { value } = action;

    state.setView = value;
  },
  [RESET_DATA](state, action) {
    const {
      sortOptions,
      sort,
      rarities
    } = action;

    state.sortOptions = sortOptions;
    state.sort = sort;
    state.rarityOptions = rarities;
    state.rarityFilter = [];
    state.setFilter = [];
    state.currentPage = 1;
    state.totalPages = null;
    state.totalCards = null;
    state.set = null;
    state.keyword = '';
    state.inWishlist = false;
    state.inCollection = false;
  }
};

export default {
  state,
  actions,
  mutations
};
