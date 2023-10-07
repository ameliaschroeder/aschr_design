<!-- this is the code for the "group 4" about graphic ??? -->

<template>
  <div class="flex-row">
    <ProjectCard
      imagesource="/Users/ameliaschroeder/Documents/Undergrad/Year 4/Y4Q3/Q3 Portfolio/portfolio-draft-1.6 /portfolio-draft-1.6/src/assets/rect.png"
      class="card-1 ar32"
    />
    <ProjectCard imagesource="rect" class="card-1 ar32" />
    <ProjectCard class="card-1 ar32" />
    <ProjectCard class="card-1 ar32" />
  </div>
</template>

<script lang="ts">
import ProjectCard from "../components/Card.vue";
// import Rect from ".src/assets/rect.png";
export default {
  name: "ContentFrame1",
  components: {
    ProjectCard,
  },
  props: ["imagesource"],
  data() {
    return {
      // rect: Rect,
    };
  },
  rect: require("../assets/rect.png"),
};
</script>

<style>
/* .footer-container {
  height: 392px;
  margin-right: 7.35px;
  position: relative;
  width: 99%;
  margin-top: 5%;
} */

/* .group-4 {
  margin-right: 1px;
  margin-top: 110px;
  margin-left: 7.5%;
  width: 85%;
} */

.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 7.14%;
  row-gap: 7.14%;
  /* height: 902px; */
  /* margin-right: 5px; */
  margin-top: 10%;
  margin-left: 3.515%;
  width: 93%;
  height: fit-content;
  min-height: 0px;
}

.ar32 {
  margin-top: 7.3%;
  aspect-ratio: 3/2;
  flex-grow: 1;
  width: 43%;
}
</style>
