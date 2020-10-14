<template>
  <div class="fullpage-layout-container">
    <navigation></navigation>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <home></home>
      </div>
      <div class="section">
        <about></about>
      </div>
      <div class="section">Projects ...</div>
    </full-page>
  </div>
</template>

<script>
import { Home, About } from "@/components/Sections";
import { Navigation } from "@/components";

export default {
  name: "Fullpage",
  components: { Home, About, Navigation },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        menu: "#menu",
        anchors: ["home", "about", "projects"],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.fullpage-layout-container {
  .section {
    margin: 0 4%;
  }
}
</style>