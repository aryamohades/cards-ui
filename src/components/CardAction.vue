<template>
  <div class="card-action-container">
    <router-link
      v-if="type === 'link'"
      :to="to"
      class="button card-action">
      <i
        v-if="icon"
        :class="iconClass(icon)"
        class="card-action-icon fas">
      </i>
      <span v-text="text"></span>
    </router-link>
    <div
      v-else
      @click="onClick"
      class="button card-action">
      <i
        v-if="icon"
        :class="iconClass(icon)"
        class="card-action-icon fas">
      </i>
      <span v-text="text"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: String
    },
    type: {
      type: String
    },
    onClick: {
      type: Function
    },
    icon: {
      type: String
    }
  },
  methods: {
    iconClass(icon) {
      return `fa-${icon}`;
    }
  }
};
</script>

<style scoped>
.card-action-container {
  width: 100%;
  max-width: 200px;
}

.card-action {
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.22s ease;
  width: 100%;
  margin-bottom: 12px;
}

.card-action-icon {
  margin-right: 8px;
}

</style>
