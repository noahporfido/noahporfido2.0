<template>
  <div class="fullpage-layout-container">
    <navigation></navigation>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div
        v-for="(section, index) in options.anchors"
        :key="index"
        class="section"
      >
        <component :is="section"></component>
      </div>
    </full-page>
  </div>
</template>

<script>
import { Home, Values } from "@/components/Sections";
import { Navigation } from "@/components";

export default {
  name: "Fullpage",
  components: { Home, Values, Navigation },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        menu: "#menu",
        anchors: ["home", "values"],
        navigation: true,
        navigationPosition: "right",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.fullpage-layout-container {
  .section {
    margin: 100px 4% 0 4%;
    height: calc(100vh - 100px);
  }
}
</style>