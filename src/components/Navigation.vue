<template>
  <div class="navigation-container">
    <ul>
      <li @click="scrollToSection('#home')">Home</li>
      <li @click="scrollToSection('#about')">About</li>
      <li @click="scrollToSection('#projects')">Projects</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSection(hash) {
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
  ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;

    li {
      cursor: pointer;
      padding: $md-pd;
      font-size: $title-md;
      animation: 1s slideIn;
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