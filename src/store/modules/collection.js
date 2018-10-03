import api from '@/api';

import {
  SET_ERROR,
  SET_SUCCESS
} from '@/store/types';

import { API_COLLECTION } from '@/constants';

const state = {
  loading: false
};

const actions = {
  async addToCollection({ commit }, id) {
    try {
      await api({
        route: API_COLLECTION,
        method: 'post',
        data: {
          cardId: id
        }
      });

      commit(SET_SUCCESS, {
        success: 'Added card to collection'
      });
    } catch (e) {
      const message = e.status === 401
        ? 'You must be logged in to do that'
        : 'Could not add card to collection';

      commit(SET_ERROR, {
        error: message
      });
    }
  }
};

export default {
  state,
  actions
};
