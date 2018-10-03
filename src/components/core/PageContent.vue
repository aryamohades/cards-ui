<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<style scoped>
.page-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 40px 0px 80px;
  padding: 0 45px;
}

@media(max-width: 500px) {
  .page-content {
    padding: 0 30px;
  }
}
</style>
