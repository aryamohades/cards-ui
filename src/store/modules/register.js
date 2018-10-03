import router from '@/router';
import form from '@/store/modules/form';
import { REGISTER_SUCCESS } from '@/store/types';

import {
  notEmpty,
  isEmail
} from '@/store/validators';

import {
  DEFAULT_REGISTER_COMPONENT,
  API_REGISTER
} from '@/constants';

export default form({
  submit: API_REGISTER,
  fields: {
    email: {
      type: String,
      validate: [
        notEmpty('Email'),
        isEmail
      ]
    },
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
    const { user, token } = data;

    commit(REGISTER_SUCCESS, { user, token }, {
      root: true
    });

    router.push({
      name: DEFAULT_REGISTER_COMPONENT
    });
  }
});
