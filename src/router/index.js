import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import CardListing from '@/components/CardListing';
import SetListing from '@/components/SetListing';
import SetDetail from '@/components/SetDetail';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Account from '@/components/Account';
import Collection from '@/components/Collection';
import Marketplace from '@/components/Marketplace';
import Wishlist from '@/components/Wishlist';
import Messages from '@/components/Messages';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ForgotPassword from '@/components/ForgotPassword';
import ResetPassword from '@/components/ResetPassword';
import ChangePassword from '@/components/ChangePassword';
import ChangeEmail from '@/components/ChangeEmail';
import ConfirmEmail from '@/components/ConfirmEmail';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }

  next({ name: 'account' });
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }

  next({
    path: '/login',
    query: { next: to.path }
  });
};

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: SetListing
    },
    {
      path: '/cards',
      name: 'cards',
      component: CardListing,
      beforeEnter: (to, from, next) => {
        store.dispatch('setSetView', false);
        store.dispatch('resetData');
        next();
      }
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      component: Marketplace
    },
    {
      path: '/sets',
      name: 'sets',
      component: SetListing
    },
    {
      path: '/sets/:name',
      name: 'setDetail',
      component: SetDetail,
      beforeEnter: (to, from, next) => {
        store.dispatch('setSetView', true);
        store.dispatch('clearSetData');
        store.dispatch('resetData');
        next();
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: Wishlist,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: ForgotPassword,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: ResetPassword,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/change-password',
      name: 'changePassword',
      component: ChangePassword,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/change-email',
      name: 'changeEmail',
      component: ChangeEmail,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/confirm-email',
      name: 'confirmEmail',
      component: ConfirmEmail
    }
  ],
  scrollBehavior(to, from, savedPosition) { // eslint-disable-line no-unused-vars
    return { x: 0, y: 0 };
  }
});

export default router;
