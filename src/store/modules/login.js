import router from '@/router';
import form from '@/store/modules/form';
import { notEmpty } from '@/store/validators';

import {
  SET_FORM_ERROR,
  LOGIN_SUCCESS
} from '@/store/types';

import {
  DEFAULT_LOGIN_COMPONENT,
  API_LOGIN
} from '@/constants';

export default form({
  submit: API_LOGIN,
  fields: {
    username: {
      type: String,
      validate: notEmpty('Username')
    },
    password: {
      type: String,
      validate: notEmpty('Password')
    }
  },
  afterSubmit: (commit, data) => {
    const { next } = router.currentRoute.query;
    const { user, token } = data;

    commit(LOGIN_SUCCESS, { user, token }, {
      root: true
    });

    router.push(
      next
        ? { path: next }
        : { name: DEFAULT_LOGIN_COMPONENT }
    );
  },
  submitError: (commit, e) => {
    if (e.status === 401) {
      commit(SET_FORM_ERROR, {
        error: 'Invalid username or password'
      });
    }
  }
});
