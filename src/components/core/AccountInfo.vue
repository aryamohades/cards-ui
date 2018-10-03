<template>
  <div class="account-info-container">
    <div
      v-text="label"
      class="account-info-label">
    </div>
    <div
      v-text="value"
      class="account-info-text">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    label: {
      type: String,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: mapState({
    value({ auth }) {
      if (!auth.user) {
        return '';
      }

      const val = auth.user[this.field];

      if (this.type === 'date') {
        return new Date(val).toLocaleString('en-us', {
          month: 'long',
          year: 'numeric'
        });
      }

      return val;
    }
  })
};
</script>

<style scoped>
.account-info-container {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.account-info-label {
  color: #222;
  font-weight: 700;
  margin-right: 8px;
  font-size: 14px;
}

.account-info-text {
  font-size: 16px;
  color: #444;
  margin-right: 8px;
}
</style>
