// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import '@/assets/css';
import { http } from '@/api';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const token = localStorage.getItem('token');

if (token) {
  http.defaults.headers.common.Authorization = token;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
