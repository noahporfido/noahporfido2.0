<template>
  <div class="fullpage-layout-container">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Home></Home>
      </div>
      <div class="section">Second section ...</div>
      <div class="section">Second section ...</div>
    </full-page>
  </div>
</template>

<script>
import { Home } from "@/components/sections";

export default {
  name: "Fullpage",
  components: { Home },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        menu: "#menu",
        anchors: ["noah", "about", "projects"],
        navigation: true,
      },
    };
  },
};
</script>