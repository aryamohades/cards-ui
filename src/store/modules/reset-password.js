import form from '@/store/modules/form';

import {
  SET_FORM_ERROR,
  SET_SUCCESS
} from '@/store/types';

import { notEmpty } from '@/store/validators';
import { API_RESET_PASSWORD } from '@/constants';
import router from '@/router';

export default form({
  submit: API_RESET_PASSWORD,
  fields: {
    password: {
      type: String,
      validate: notEmpty('Password')
    },
    confirmPassword: {
      type: String,
      validate: notEmpty('Password')
    }
  },
  validate: (values) => {
    const { token } = router.currentRoute.query;

    const {
      password,
      confirmPassword
    } = values;

    if (!token) {
      throw new Error('No token provided');
    }

    if (password !== confirmPassword) {
      throw new Error('The passwords do not match');
    }
  },
  beforeSubmit: (values) => {
    const { token } = router.currentRoute.query;

    return {
      ...values,
      token
    };
  },
  afterSubmit: (commit) => {
    commit(SET_SUCCESS, {
      success: 'Success! You may now login with your new password.'
    }, {
      root: true
    });

    router.push({
      name: 'login'
    });
  },
  submitError: (commit, e) => {
    if (e.status === 404) {
      commit(SET_FORM_ERROR, {
        error: 'Token is invalid or expired'
      });
    }
  }
});
