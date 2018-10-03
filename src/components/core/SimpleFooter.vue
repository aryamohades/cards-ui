<template>
  <div class="footer">
    <div class="footer-links">
      <router-link
        v-for="(item, index) in items"
        :key="index"
        v-text="item.text"
        :to="item.to"
        class="footer-link">
      </router-link>
    </div>
    <div
      v-if="social"
      class="footer-social">
      <a
        v-for="(item, index) in social"
        :key="index"
        :href="item.link"
        class="footer-social-link">
        <i :class="iconClass(item.class)"></i>
      </a>
    </div>
    <div class="made-with">Made with ❤️ in Austin, TX</div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    social: {
      type: Array
    }
  },
  methods: {
    iconClass(name) {
      return `fab fa-${name}`;
    }
  }
};
</script>

<style scoped>
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f6f6f6;
  border-top: 1px solid #dedede;
}

.footer-links {
  display: flex;
  align-items: center;
}

.footer-link {
  font-size: 13px;
  font-weight: 600;
  color: #aaaaaa;
  padding: 4px;
  margin: 0 16px;
  transition: all .2s ease;
}

.footer-link:hover {
  color: #444444;
}

.footer-social {
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 20px;
}

.footer-social-link {
  color: #aaaaaa;
  margin: 0 16px;
  font-size: 24px;
}

.footer-social-link:hover {
  color: #444444;
}

.made-with {
  font-weight: 300;
  font-size: 13px;
  margin-top: 20px;
  color: #808080;
}

@media(max-width: 768px) {
  .footer {
    padding: 35px 20px;
  }

  .footer-links {
    flex-direction: column;
  }

  .footer-link {
    margin-bottom: 20px;
  }
}
</style>
