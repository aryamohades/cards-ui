import form from '@/store/modules/form';

import {
  SET_FORM_ERROR,
  SET_SUCCESS
} from '@/store/types';

import router from '@/router';
import { notEmpty } from '@/store/validators';
import { getObjectFromStorage } from '@/store/util';
import { API_CHANGE_PASSWORD } from '@/constants';

export default form({
  submit: API_CHANGE_PASSWORD,
  fields: {
    username: {
      type: String,
      initialValue: getObjectFromStorage('user').username
    },
    currentPassword: {
      type: String,
      validate: notEmpty('Password'),
      sendAs: 'password'
    },
    password: {
      type: String,
      validate: notEmpty('Password'),
      sendAs: 'newPassword'
    },
    confirmPassword: {
      type: String,
      validate: notEmpty('Password')
    }
  },
  validate: (values) => {
    const {
      newPassword,
      confirmPassword
    } = values;

    if (newPassword !== confirmPassword) {
      throw new Error('The passwords do not match');
    }
  },
  afterSubmit: (commit) => {
    commit(SET_SUCCESS, {
      success: 'You have successfully changed your password.'
    }, {
      root: true
    });

    router.push({
      name: 'account'
    });
  },
  submitError: (commit, e) => {
    if (e.status === 401) {
      commit(SET_FORM_ERROR, {
        error: 'The password you entered is incorrect'
      });
    }
  }
});
