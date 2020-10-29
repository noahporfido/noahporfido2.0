<template>
  <div
    v-if="$route.hash && $route.hash !== '#home'"
    class="navigation-container"
  >
    <ul>
      <li @click="scrollToSection('#home')">home</li>
      <li @click="scrollToSection('#about')">about me</li>
      <li @click="scrollToSection('#projects')">projects</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSection(hash) {
      console.log(this.$route.hash);
      location.href = hash;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_general.scss";

.navigation-container {
  z-index: 2;
  position: fixed;
  width: 100%;
  padding-right: 4%;
  ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;

    li {
      font-weight: 700;
      cursor: pointer;
      padding: $md-pd;
      font-size: $title-md;
      transition: all 0.5s ease;
      animation: 1s slideIn;

      &:hover {
        background: linear-gradient(to right, #6c63ff, rgb(0, 204, 255));
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &:nth-of-type(2) {
        animation-duration: 1.3s;
      }
      &:nth-of-type(3) {
        animation-duration: 1.6s;
      }
    }
  }
}

@keyframes slideIn {
  0% {
    margin-top: 50px;
  }

  100% {
    margin-top: 0;
  }
}
</style>