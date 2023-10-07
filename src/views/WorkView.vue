<template>
  <ProjectBanner />
  <AboutGraphic />
</template>

<script lang="ts">
import AboutGraphic from "../components/AbGraphic.vue";
import ProjectBanner from "../components/WorkBanner.vue";

export default {
  name: "WorkV",
  components: {
    ProjectBanner,
    AboutGraphic,
  },
  data() {
    return { frame1Data };
  },
};

const frame1Data = {
  title: "MY WORK",
  aboutMe: "ABOUT ME",
};
</script>

<style></style>
