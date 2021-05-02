<template>
  <div
    v-if="$route.hash && $route.hash !== '#home'"
    class="navigation-container"
  >
    <ul>
      <li class="bold rotate90" @click="scrollToSection('#home')">N</li>
      <li @click="scrollToSection('#values')">Werte</li>
      <li @click="scrollToSection('#timeline')">Werdegang</li>
      <li @click="scrollToSection('#skills')">Skills</li>
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
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 80px;
    li {
      cursor: pointer;
      font-size: $title-sm;
    }
  }
}

// .navigation-container {
//   z-index: 2;
//   position: fixed;
//   width: 100%;
//   padding: $lg-pd 4%;
//   ul {
//     display: flex;
//     justify-content: flex-end;
//     list-style-type: none;

//     li {
//       font-weight: 700;
//       cursor: pointer;
//       padding: 0 $md-pd;
//       font-size: $title-sm;
//       transition: all 0.5s ease;
//       animation: 1s slideIn;
//       position: relative;

//       &::after {
//         position: absolute;
//         content: "";
//         top: 100%;
//         left: 0;
//         width: 100%;
//         height: 2px;
//         background: black;
//         transform: scaleX(0);
//         transform-origin: right;
//         transition: transform 0.5s;
//       }

//       &:hover::after {
//         transform: scaleX(1);
//         transform-origin: left;
//       }

//       &:nth-of-type(2) {
//         animation-duration: 1.3s;
//       }
//       &:nth-of-type(3) {
//         animation-duration: 1.6s;
//       }
//     }
//   }
// }

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