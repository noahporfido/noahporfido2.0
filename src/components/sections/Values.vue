<template>
  <div class="values-container">
    <div class="value-container">
      <div
        style="background-image: url('../../assets/images/values/help.png')"
        class="image"
      >
        <div class="border-accent"></div>
      </div>
    </div>
    <div class="value-container">
      <div class="image">
        <div class="border-accent"></div>
      </div>
    </div>
    <div class="value-container">
      <div class="image">
        <div class="border-accent"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_general.scss";

.value-container {
  .image {
    height: 100px;
    width: 300px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    .border-accent {
    }
  }
}
</style>