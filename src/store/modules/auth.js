import { http } from '@/api';
import router from '@/router';

import {
  UPDATE_USER,
  LOGIN_SUCCESS,
  LOGOUT
} from '@/store/types';

import {
  getObjectFromStorage,
  setObjectInStorage,
  setItemInStorage
} from '@/store/util';

import avatar from '@/assets/img/avatar.jpg';

const state = {
  token: localStorage.getItem('token') || '',
  user: getObjectFromStorage('user')
};

const actions = {
  logout({ commit }, next) {
    commit(LOGOUT);

    const query = {};

    if (typeof next === 'string') {
      query.next = next;
    }

    router.push({
      name: 'login',
      query
    });
  }
};

const mutations = {
  [UPDATE_USER](state) {
    state.user = getObjectFromStorage('user');
  },
  [LOGIN_SUCCESS](state, action) {
    const { user, token } = action;

    // set axios authorization header
    http.defaults.headers.common.Authorization = token;

    setItemInStorage('token', token);
    setObjectInStorage('user', user);

    state.token = token;
    state.user = user;
  },
  [LOGOUT](state) {
    // remove axios authorization header
    delete http.defaults.headers.common.Authorization;

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    state.token = '';
    state.user = {};
  }
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  avatar: (state) => state.user.avatar || avatar
};

export default {
  state,
  actions,
  mutations,
  getters
};
