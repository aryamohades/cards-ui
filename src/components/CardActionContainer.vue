<template>
  <div class="card-actions">
    <CardAction
      v-for="(action, index) in actions"
      :key="index"
      v-bind="action"/>
  </div>
</template>

<script>
import CardAction from '@/components/CardAction';

export default {
  components: {
    CardAction
  },
  props: {
    actions: {
      type: Array
    }
  }
};
</script>

<style scoped>
.card-actions {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
