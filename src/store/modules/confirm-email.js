import api from '@/api';
import router from '@/router';

import {
  API_CONFIRM_EMAIL,
  CONFIRM_EMAIL_SUCCESS_MESSSAGE
} from '@/constants';

import {
  getObjectFromStorage,
  setObjectInStorage
} from '@/store/util';

import {
  UPDATE_USER,
  EMAIL_CONFIRMATION_LOADING,
  EMAIL_CONFIRMATION_SUCCESS,
  EMAIL_CONFIRMATION_ERROR
} from '@/store/types';

const state = {
  error: null,
  success: null,
  loading: false
};

const actions = {
  async confirmEmail({ commit }) {
    const { token } = router.currentRoute.query;

    try {
      if (token) {
        commit(EMAIL_CONFIRMATION_LOADING, {
          loading: true
        });

        const { data } = await api({
          route: API_CONFIRM_EMAIL,
          method: 'post',
          data: {
            token
          }
        });

        const { email } = data;

        const user = getObjectFromStorage('user');

        if (user.email) {
          user.email = email;

          setObjectInStorage('user', user);

          commit(UPDATE_USER);
        }

        commit(EMAIL_CONFIRMATION_SUCCESS, {
          email
        });
      }
    } catch (e) {
      commit(EMAIL_CONFIRMATION_LOADING, {
        loading: false
      });

      commit(EMAIL_CONFIRMATION_ERROR, {
        error: 'Wrong'
      });
    }
  }
};

const mutations = {
  [EMAIL_CONFIRMATION_LOADING](state, action) {
    const { loading } = action;

    state.loading = loading;
  },
  [EMAIL_CONFIRMATION_SUCCESS](state, action) {
    const { email } = action;

    state.success = CONFIRM_EMAIL_SUCCESS_MESSSAGE(email);
  },
  [EMAIL_CONFIRMATION_ERROR](state, action) {
    const { error } = action;

    state.error = error;
  }
};

export default {
  state,
  actions,
  mutations
};
