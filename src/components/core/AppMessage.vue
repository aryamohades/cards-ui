<template>
  <div class="app-message-container">
    <div
      v-text="message"
      :class="messageClass"
      class="app-message">
    </div>
  </div>
</template>

<script>
import debounce from 'debounce';

import {
  mapActions,
  mapState
} from 'vuex';

import {
  SET_ERROR,
  SET_SUCCESS
} from '@/store/types';

import { subscribe } from '@/store/util';

export default {
  created() {
    subscribe(
      this.$store,
      [SET_ERROR, SET_SUCCESS],
      debounce(this.clearMessage, 3000)
    );
  },
  computed: mapState({
    message: ({ app }) => app.message,
    messageClass({ app }) {
      const {
        active,
        success,
        error
      } = app;

      return {
        active,
        'app-success-message': success,
        'app-error-message': error
      };
    }
  }),
  methods: mapActions(['clearMessage'])
};
</script>

<style scoped>
.app-message {
  opacity: 0;
  pointer-events: none;
  left: 50%;
  transform: translate3d(-50%, 0px, 0);
  opacity: 0;
  font-size: 14px;
  font-weight: 400;
  width: 450px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  position: fixed;
  z-index: 9999;
  top: 5px;
  transition: transform .35s ease, opacity .35s ease;
  box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.1);
  text-shadow: 0 1px 0 rgba(255,255,255,.5);
}

.app-message.active {
  opacity: 1;
  pointer-events: initial;
  transform: translate3d(-50%, 15px, 0);
}

.app-warning-message {
  color: #c09853;
  border: 1px solid #fbeed5;
  background-color: #fcf8e3;
}

.app-success-message {
  background: #dff0d8;
  border-color: #d6e9c6;
  color: #468847;
}

.app-error-message {
  background-color: #f2dede;
  border-color: #eed3d7;
  color: #b94a48;
}
</style>
