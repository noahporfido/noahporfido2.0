<template>
  <div class="about-section">
    <div class="container">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea
      </p>
      <img
        alt="guyworking"
        src="../../assets/images/illsutrations/computer_working.svg"
      />
    </div>
    <div class="container">
      <img
        alt="guyworking"
        src="../../assets/images/illsutrations/computer_working.svg"
      />
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem
      </p>
    </div>
    <div class="container">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea
      </p>
      <img
        alt="guyworking"
        src="../../assets/images/illsutrations/computer_working.svg"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_general.scss";

.about-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  .container {
    display: flex;
    height: 200px;
    min-width: 200px;

    // background-color: #d6d6d6;
    // margin: $md-mr $md-mr;
    p {
      text-align: center;
      margin: auto;
      height: 100%;
      width: 50%;
      padding: $sm-pd;
    }
    img {
      width: 50%;
    }
  }

  hr {
    height: 1px;
    width: 40%;
    background-color: #d6d6d6;
  }
}
</style>