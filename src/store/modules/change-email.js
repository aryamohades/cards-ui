import form from '@/store/modules/form';

import {
  SET_FORM_ERROR,
  SET_SUCCESS
} from '@/store/types';

import {
  notEmpty,
  isEmail
} from '@/store/validators';

import router from '@/router';
import { getObjectFromStorage } from '@/store/util';
import { API_CHANGE_EMAIL } from '@/constants';


export default form({
  submit: API_CHANGE_EMAIL,
  fields: {
    username: {
      type: String,
      initialValue: getObjectFromStorage('user').username
    },
    email: {
      type: String,
      validate: [
        notEmpty('Email'),
        isEmail
      ]
    },
    confirmEmail: {
      type: String,
      validate: [
        notEmpty('Email'),
        isEmail
      ]
    },
    password: {
      type: String,
      validate: notEmpty('Password')
    }
  },
  validate: (values) => {
    const {
      email,
      confirmEmail
    } = values;

    if (email !== confirmEmail) {
      throw new Error('The emails do not match');
    }
  },
  afterSubmit: (commit) => {
    commit(SET_SUCCESS, {
      success: 'An activation link was sent to your new email address.'
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
