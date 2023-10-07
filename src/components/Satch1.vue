<template>
  <div class="cube-container s-margin">
    <div class="satch img-container">
      <img
        src="../assets/satch-assets/pack-dwg-big.svg"
        alt="drawing of satch pack"
        class="response-img"
      />
    </div>
    <div class="cube img-container">
      <img
        src="../assets/satch-assets/cube-dwg.svg"
        alt="packing cubes"
        class="response-img"
      />
    </div>

    <div class="img-container unfold-1">
      <img
        src="../assets/satch-assets/unfold1.svg"
        alt="unfold1"
        class="response-img w-100"
      />
    </div>
    <div class="img-container unfold-2">
      <img
        src="../assets/satch-assets/unfold2.svg"
        alt="unfold2"
        class="response-img w-100"
      />
    </div>

    <div class="unfold-text-container">
      <p class="unfoldp mb-30 mt-48">
        To allow for versatility and organization, Satch was dimensioned as a
        system.
      </p>
      <p class="unfoldp mb-30">
        Packing cubes can nest in a variety of configurations, so that travelers
        can mix and match sizes to suit their needs.
      </p>
      <p class="unfoldp mb-30">
        When not full, the straps cinch the sides of the pack, keeping contents
        snug to the body while giving the pack it a smaller profile.
      </p>
      <p class="unfoldp mb-30">
        This makes Satch perfect for multi-week backpacking trips, as well as
        day trips as you explore your destination.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
// import ProjectCard from "./Card.vue";
// import hero1 from "../assets/satch-assets/hero1.1.png"
export default {
  name: "SatchContent",
};
</script>

<style lang="css">
.cube-container {
  /* width: 100%; */
  /* margin-left: 96px;
  margin-right: 96px; */
  margin-top: 80px;
  /* background: rgba(166, 167, 188, 0.2); */
  border-radius: 30px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(15, 40px);
  grid-gap: 40px;
}
.satch {
  grid-column: 1/7;
  grid-row: 1/6;
}
.cube {
  grid-column: 7/13;
  grid-row: 1/6;
}
.img-container {
  overflow: hidden;
  /* margin-top: 24px;
  margin-bottom: 24px; */
  border-radius: 20px;
  background-color: white;
}

.unfold-text-container {
  grid-column: 1/6;
  grid-row: 6/14;
  color: #fff;
  font-family: Roboto Condensed;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  display: flex;
  flex-wrap: wrap;
}
.w-100 {
  width: 100%;
}
.unfold-1 {
  grid-column: 6/13;
  grid-row: 6/10;
}
.unfold-2 {
  grid-column: 6/13;
  grid-row: 10/14;
}
.mb-30 {
  margin-bottom: 30px;
}
@media (max-width: 1028px) {
  .cube-container {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(16, 40px);
    grid-gap: 32px;
    /* margin-left: 64px;
    margin-right: 64px; */
  }

  .satch {
    grid-column: 1/5;
    grid-row: 1/5;
  }
  .cube {
    grid-column: 1/5;
    grid-row: 5/9;
  }
  .unfold-1 {
    grid-column: 3/9;
    grid-row: 9/12;
  }
  .unfold-2 {
    grid-column: 3/9;
    grid-row: 12/15;
  }
  .unfold-text-container {
    grid-column: 5/9;
    grid-row: 1/9;
    font-size: 20px;
  }
}

@media (max-width: 800px) {
  .cube-container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(23, 40px);
    grid-gap: 32px;
    /* margin-left: 52px;
    margin-right: 52px; */
  }

  .satch {
    grid-column: 1/3;
    grid-row: 1/5;
  }
  .cube {
    grid-column: 1/3;
    grid-row: 5/9;
  }
  .unfold-1 {
    grid-column: 1/3;
    grid-row: 16/19;
  }
  .unfold-2 {
    grid-column: 1/3;
    grid-row: 19/22;
  }
  .unfold-text-container {
    grid-column: 1/3;
    grid-row: 9/15;
    font-size: 20px;
  }
}
</style>
