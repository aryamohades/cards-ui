import api from '@/api';
import {
  LIST_SETS,
  SET_SETS_LOADING,
  SET_SET_OPTIONS,
  FILTER_SETS
} from '@/store/types';

const state = {
  loading: true,
  sets: null,
  filteredSets: null
};

const actions = {
  async listSets({ commit }) {
    commit(SET_SETS_LOADING, {
      loading: true
    });

    try {
      const { data } = await api({
        route: '/sets'
      });

      commit(LIST_SETS, {
        sets: data
      });

      commit(SET_SET_OPTIONS, {
        sets: data
      });

      commit(SET_SETS_LOADING, {
        loading: false
      });
    } catch (e) {
      commit(SET_SETS_LOADING, {
        loading: false
      });
    }
  },
  filterSets({ commit }, e) {
    const { value } = e.target;

    if (value === '') {
      commit(FILTER_SETS, {
        sets: state.sets
      });
    } else {
      const searchTerm = value.trim().toLowerCase();

      const sets = [];
      const remaining = [];

      state.sets.forEach((set) => {
        if (set.search.startsWith(searchTerm)) {
          sets.push(set);
        } else {
          remaining.push(set);
        }
      });

      remaining.forEach((set) => {
        if (set.search.includes(searchTerm)) {
          sets.push(set);
        }
      });

      commit(FILTER_SETS, {
        sets
      });
    }
  }
};

const mutations = {
  [SET_SETS_LOADING](state, action) {
    const { loading } = action;

    state.loading = loading;
  },
  [LIST_SETS](state, action) {
    const { sets } = action;

    state.sets = sets;
    state.filteredSets = sets;
  },
  [FILTER_SETS](state, action) {
    const { sets } = action;

    state.filteredSets = sets;
  }
};

export default {
  state,
  actions,
  mutations
};
