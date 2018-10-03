import form from '@/store/modules/form';

import {
  notEmpty,
  isEmail
} from '@/store/validators';

import { SET_SUCCESS } from '@/store/types';
import { API_CONTACT } from '@/constants';

export default form({
  submit: API_CONTACT,
  fields: {
    name: {
      type: String
    },
    email: {
      type: String,
      validate: [
        notEmpty('Email'),
        isEmail
      ]
    },
    message: {
      type: String,
      validate: notEmpty('Message')
    }
  },
  afterSubmit: (commit) => {
    commit(SET_SUCCESS, {
      success: 'Message sent'
    }, {
      root: true
    });
  }
});
