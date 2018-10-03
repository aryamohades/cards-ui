import api from '@/api';

import {
  SET_FORM_LOADING,
  SET_FORM_FIELD_VALUE,
  SET_FORM_ERROR,
  CLEAR_FORM_ERRORS,
  SET_FORM_FIELD_ERRORS,
  CLEAR_FORM
} from '@/store/types';

import { DEFAULT_ERROR_MESSAGE } from '@/constants';

export default ({
  fields,
  validate,
  read, // eslint-disable-line no-unused-vars
  submit,
  beforeSubmit,
  afterSubmit,
  submitError
}) => {
  const validateFields = (values, commit) => {
    let isValid = true;
    const errors = {};

    Object.keys(fields).forEach((field) => {
      if (fields[field].validate) {
        try {
          if (Array.isArray(fields[field].validate)) {
            fields[field].validate.forEach((v) => {
              if (fields[field].sendAs) {
                v(values[fields[field].sendAs]);
              } else {
                v(values[field]);
              }
            });
          } else if (fields[field].sendAs) {
            fields[field].validate(values[fields[field].sendAs]);
          } else {
            fields[field].validate(values[field]);
          }
        } catch (e) {
          errors[field] = e.message;
          isValid = false;
        }
      }
    });

    if (!isValid) {
      commit(SET_FORM_FIELD_ERRORS, {
        errors
      });
    }

    return isValid;
  };

  const validateForm = (values, commit) => {
    let isValid = true;

    if (validate) {
      try {
        validate(values);
      } catch (e) {
        commit(SET_FORM_ERROR, {
          error: e.message
        });

        isValid = false;
      }
    }

    return isValid;
  };

  const state = {
    error: null,
    loading: false,
    fieldErrors: {},
    values: {}
  };

  Object.keys(fields).forEach((field) => {
    state.values[field] = fields[field].initialValue
      ? fields[field].initialValue
      : '';
  });

  const actions = {
    async submit({ commit }) {
      const values = {};

      Object.keys(state.values).forEach((k) => {
        const key = fields[k].sendAs
          ? fields[k].sendAs
          : k;

        values[key] = typeof state.values[k] === 'string'
          ? state.values[k].trim()
          : state.values[k];
      });

      commit(CLEAR_FORM_ERRORS);

      const isValid = (
        validateFields(values, commit) &&
        validateForm(values, commit)
      );

      if (isValid) {
        commit(SET_FORM_LOADING, {
          loading: true
        });

        const submitData = beforeSubmit
          ? beforeSubmit(values)
          : values;

        try {
          const { data } = await api({
            route: submit,
            method: 'post',
            data: submitData
          });

          if (afterSubmit) {
            afterSubmit(commit, data);
          }

          commit(SET_FORM_LOADING, {
            loading: false
          });
        } catch (e) {
          if (e.status === 400) {
            const fieldErrors = {};

            if (Array.isArray(e.data.error)) {
              e.data.error.forEach((error) => {
                fieldErrors[error.field] = error.message;
              });

              commit(SET_FORM_FIELD_ERRORS, {
                errors: fieldErrors
              });
            } else {
              commit(SET_FORM_ERROR, {
                error: e.data.error
              });
            }
          }

          if (submitError) {
            submitError(commit, e);
          } else {
            commit(SET_FORM_ERROR, {
              error: DEFAULT_ERROR_MESSAGE
            });
          }

          commit(SET_FORM_LOADING, {
            loading: false
          });
        }
      }
    },
    async setFormFieldValue({ commit }, {
      field,
      value
    }) {
      commit(SET_FORM_FIELD_VALUE, {
        field,
        value
      });
    },
    async clearForm({ commit }) {
      commit(CLEAR_FORM);
    }
  };

  const mutations = {
    [SET_FORM_FIELD_VALUE](state, action) {
      const { field, value } = action;

      state.values = {
        ...state.values,
        [field]: value
      };
    },
    [SET_FORM_FIELD_ERRORS](state, action) {
      const { errors } = action;

      state.fieldErrors = errors;
    },
    [SET_FORM_ERROR](state, action) {
      const { error } = action;

      state.error = error;
    },
    [CLEAR_FORM_ERRORS](state) {
      state.error = null;
      state.fieldErrors = {};
    },
    [SET_FORM_LOADING](state, action) {
      const { loading } = action;

      state.loading = loading;
    },
    [CLEAR_FORM](state) {
      const values = {};

      Object.keys(fields).forEach((field) => {
        values[field] = fields[field].initialValue
          ? fields[field].initialValue
          : '';
      });

      state.error = null;
      state.fieldErrors = {};
      state.values = values;
    }
  };

  return {
    state,
    actions,
    mutations,
    namespaced: true
  };
};
