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
  padding: $md-pd 4%;
  ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;

    li {
      font-weight: 700;
      cursor: pointer;
      padding: 0 $md-pd;
      font-size: $title-md;
      transition: all 0.5s ease;
      animation: 1s slideIn;
      position: relative;

      &::after {
        position: absolute;
        content: "";
        top: 100%;
        left: 0;
        width: 100%;
        height: 3px;
        background: #756cff;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
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

@keyframes textShine {
  to {
    background-position: 200%;
  }
}
</style>