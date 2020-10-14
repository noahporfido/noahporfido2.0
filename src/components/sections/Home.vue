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

<script></script>

<style lang="scss" scoped>
@import "../../assets/styles/_general.scss";

.viewContainer-top {
  height: calc(100vh - 80px);
  margin: 0 auto;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    width: 90%;
    display: flex;
    align-items: baseline;

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
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slidein {
  0% {
    margin-left: -800px;
  }

  100% {
    margin-left: -10px;
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
