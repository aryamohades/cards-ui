import form from '@/store/modules/form';
import { SET_SUCCESS } from '@/store/types';

import {
  notEmpty,
  isEmail
} from '@/store/validators';

import { API_FORGOT_PASSWORD } from '@/constants';

export default form({
  submit: API_FORGOT_PASSWORD,
  fields: {
    email: {
      type: String,
      validate: [
        notEmpty('Email'),
        isEmail
      ]
    }
  },
  afterSubmit: (commit) => {
    commit(SET_SUCCESS, {
      success: 'Check your email for a link to reset your password'
    }, {
      root: true
    });
  }
});
