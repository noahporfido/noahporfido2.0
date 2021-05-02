<template>
  <div id="start" class="viewContainer-top">
    <div class="wrapper">
      <h1>Noah Porfido</h1>
      <div>
        <h2>frontend developer</h2>
      </div>
    </div>
    <div class="arrow-absolute-container">
      <div class="arrow-container">
        <div @click="start" class="arrow"></div>
        <div @click="start" class="arrow"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      location.href = "#values";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_general.scss";

.viewContainer-top {
  height: calc(100vh - 80px);
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .arrow-absolute-container {
    position: absolute;
    bottom: 50px;
    .arrow-container {
      height: 100px;
      width: 100px;
      position: relative;
      .arrow {
        cursor: pointer;
        position: absolute;
        transform: rotate(315deg) translate(-20%, -50%);
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        border-left: 1px solid black;
        border-bottom: 1px solid black;

        &:nth-of-type(2) {
          top: 40%;
        }
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
