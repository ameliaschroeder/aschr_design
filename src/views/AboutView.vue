<template>
  <AboutGraphic />
  <ProjectBanner />
</template>

<script lang="ts">
// import ContentFrame1 from "../components/Frame1.vue";
import AboutGraphic from "../components/AbGraphic.vue";
//import head from "./assets/header.png";
import HeroBanner from "../components/SatchHero.vue";
import ProjectBanner from "../components/WorkBanner.vue";
export default {
  name: "AboutV",
  components: {
    // ContentFrame1,
    AboutGraphic,
    ProjectBanner,
    // HeroBanner,
  },
};
</script>

<style></style>
