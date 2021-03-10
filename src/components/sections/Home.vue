<template>
  <div id="start" class="viewContainer-top">
    <div class="wrapper">
      <h1>Noah Porfido</h1>
      <div>
        <h2>frontend developer</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.hash === "" || "#home");
  },
  methods: {
    start() {
      location.href = "#about";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_general.scss";

.viewContainer-top {
  height: calc(100vh - 80px);
  margin: 0 auto;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .start-tour-container {
    position: absolute;
    bottom: 0;
    opacity: 0;
    border-radius: 16px;
    animation-name: topToBottom;
    animation-duration: 1s;
    animation-delay: 2s;
    animation-fill-mode: forwards;

    h1 {
      cursor: pointer;
      font-size: $title-sm;
      position: relative;

      &:hover::after {
        animation: borderSpin 0.6s;
        width: 0;
        content: "";
        animation-fill-mode: forwards;
        border-bottom: 1px solid black;
        position: absolute;
        bottom: -5px;
        height: 5px;
        left: 0;
      }
    }
  }

  .wrapper {
    width: 90%;
    display: flex;
    align-items: center;

    h1 {
      animation: showup 2s;
    }

    div {
      margin-left: 15px;
      padding-left: 15px;
      animation: reveal 2s;
      overflow: hidden;
      max-width: 700px;
      border-left: 1px solid $text-color;

      h2 {
        animation: slidein 2s;
      }
    }
  }
}

@keyframes borderSpin {
  to {
    transform: rotate(180deg);
    width: 100%;
  }
}

@keyframes showup {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slidein {
  from {
    margin-left: -800px;
  }

  to {
    margin-left: -10px;
  }
}

@keyframes topToBottom {
  0% {
    bottom: -50px;
  }

  100% {
    bottom: 0;
    opacity: 1;
  }
}

@keyframes reveal {
  0% {
    opacity: 0;
    width: 0px;
  }

  100% {
    opacity: 1;
    width: 160px;
  }
}

//media queries

@media screen and (min-width: 410px) {
  .viewContainer-top {
    font-size: 10px;
  }
}

//ipad
@media screen and (min-width: 760px) {
  .viewContainer-top {
    font-size: 15px;
  }

  @keyframes reveal {
    100% {
      opacity: 1;
      width: 300px;
    }
  }
}

@media screen and (min-width: 1000px) {
  .viewContainer-top {
    font-size: 20px;
  }
}
</style>
