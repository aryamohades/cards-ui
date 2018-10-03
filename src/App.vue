<template>
  <div class="wrapper">
    <AppMessage/>
    <Navbar v-bind="navbarProps"/>
    <router-view/>
    <SimpleFooter v-bind="footerProps"/>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import AppMessage from '@/components/core/AppMessage';
import Navbar from '@/components/core/navbar/Navbar';
import SimpleFooter from '@/components/core/SimpleFooter';
import { http } from '@/api';

export default {
  components: {
    AppMessage,
    Navbar,
    SimpleFooter
  },
  created() {
    http.interceptors.response.use((response) => response, this.handleApiError);
  },
  data() {
    const footerProps = {
      items: [
        {
          text: 'Home',
          to: { name: 'home' }
        },
        {
          text: 'About',
          to: { name: 'about' }
        },
        {
          text: 'Contact',
          to: { name: 'contact' }
        }
      ]
    };

    return {
      footerProps
    };
  },
  computed: {
    ...mapGetters(['avatar']),
    ...mapState({
      navbarProps({ auth: { user } }) {
        return {
          brand: {
            text: 'Victory Road'
          },
          items: [
            {
              text: 'Explore Cards',
              type: 'link',
              to: { name: 'cards' }
            },
            {
              text: 'Explore Sets',
              type: 'link',
              to: { name: 'sets' }
            },
            {
              text: 'Marketplace',
              type: 'link',
              to: { name: 'marketplace' }
            }
          ],
          actions: [
            {
              text: 'Login',
              class: 'button',
              to: { name: 'login' }
            },
            {
              text: 'Register',
              class: 'button button-primary',
              to: { name: 'register' }
            }
          ],
          auth: {
            type: 'dropdown',
            anchor: 'right',
            image: this.avatar,
            text: user.username,
            items: [
              {
                type: 'link',
                to: { name: 'account' },
                text: 'Account',
                icon: 'user'
              },
              {
                type: 'link',
                to: { name: 'collection' },
                text: 'Collection',
                icon: 'th-large'
              },
              {
                type: 'link',
                to: { name: 'wishlist' },
                text: 'Wishlist',
                icon: 'star'
              },
              {
                type: 'link',
                to: { name: 'messages' },
                text: 'Messages',
                icon: 'envelope'
              },
              {
                type: 'action',
                text: 'Logout',
                borderTop: true,
                click: this.logout
              }
            ]
          }
        };
      }
    })
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    handleApiError(err) {
      if (err.response.status === 401) {
        const { responseURL } = err.response.request;

        if (
          !responseURL.endsWith('/login') &&
          !responseURL.endsWith('/changepassword')
        ) {
          this.logout(this.$route.path);
        }
      }

      return Promise.reject(err.response);
    }
  }
};
</script>

<style scoped>
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
