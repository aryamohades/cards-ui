<template>
  <PageContent>
    <div v-if="error" v-text="error"></div>
    <div v-if="success" v-text="success"></div>
  </PageContent>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';

import PageContent from '@/components/core/PageContent';

export default {
  components: {
    PageContent
  },
  created() {
    this.confirmEmail();
  },
  computed: mapState({
    loading: ({ confirmEmail }) => confirmEmail.loading,
    success: ({ confirmEmail }) => confirmEmail.success,
    error: ({ confirmEmail }) => confirmEmail.error
  }),
  methods: mapActions(['confirmEmail'])
};
</script>

<style scoped>

</style>
