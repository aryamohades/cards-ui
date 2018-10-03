<template>
  <PageContent>
    <Title v-bind="titleProps"/>
  </PageContent>
</template>

<script>
import PageContent from '@/components/core/PageContent';
import Title from '@/components/core/Title';

export default {
  components: {
    PageContent,
    Title
  },
  data() {
    const titleProps = {
      text: 'Coming Soon'
    };

    return {
      titleProps
    };
  }
};
</script>
