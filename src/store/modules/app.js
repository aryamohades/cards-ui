import {
  SET_ERROR,
  SET_SUCCESS,
  CLEAR_MESSAGE
} from '@/store/types';

const state = {
  active: false,
  error: false,
  success: false,
  message: ''
};

const actions = {
  setError({ commit }, error) {
    commit(SET_ERROR, { error });
  },
  setSuccess({ commit }, success) {
    commit(SET_SUCCESS, { success });
  },
  clearMessage({ commit }) {
    commit(CLEAR_MESSAGE);
  }
};

const mutations = {
  [SET_ERROR](state, action) {
    const { error } = action;

    state.success = false;
    state.error = true;
    state.message = error;
    state.active = true;
  },
  [SET_SUCCESS](state, action) {
    const { success } = action;

    state.error = false;
    state.success = true;
    state.message = success;
    state.active = true;
  },
  [CLEAR_MESSAGE](state) {
    state.active = false;
    state.error = false;
    state.success = false;
  }
};

export default {
  state,
  actions,
  mutations
};
