<template>
  <div
    v-text="text"
    class="title"
    :style="style">
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    align: {
      type: String
    }
  },
  data() {
    const style = {};

    if (this.align) {
      style.textAlign = this.align;
    }

    return {
      style
    };
  }
};
</script>

<style scoped>
.title {
  letter-spacing: .5px;
  font-weight: 300;
  color: #4e5c6e;
  margin-top: 25px;
  margin-bottom: 30px;
  font-size: 30px;
  line-height: 1.13;
  text-align: center;
}
</style>
