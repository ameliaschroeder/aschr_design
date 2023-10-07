<template>
  <div class="hero-banner">
    <div class="hero-card s-margin">
      <!--grid parent-->
      <div class="heroimg-container">
        <!--possibly unnecessary-->
        <img
          src="../assets/satch-assets/hero1-wide.png"
          class="heroimg response-img"
        />
        <!--try styling with this first-->
      </div>
      <div class="herotext">
        <p class="herop mb-30">
          Made by travelers for travelers, the Satch backpack and integrated
          packing cube system streamlines the packing process and keeps you
          perfectly organized throughout weeks of travel.
        </p>
        <p class="herop mb-30">
          Any seasoned traveler knows how easy it is for a bag that was once
          meticulously packed to explode into disorder. So we designed Satch to
          keep travelers organized in a versatile manner.
        </p>
        <p class="herop">
          Packing cubes sort and compress clothes, and attach directly to the
          lining of the backpack. The 360º zipper allows for easy access to
          every cube. If fully unzipped the bag lays flat, giving you a laid-out
          spread of all your things without any rummaging.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeroBanner",
};
</script>

<style>
.hero-banner {
  background: rgba(166, 167, 188, 0.2);
}
.hero-card {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 80px);
  grid-column-gap: 40px;
  /* margin-left: 96px;
  margin-right: 96px; */
}
.heroimg-container {
  grid-column: 1/6;
  grid-row: 2/10;
  overflow: hidden;
  text-align: center;
  border-radius: 20px;
  position: relative;
  max-width: 860px;
}
.herotext {
  grid-column: 7/13;
  grid-row: 3/9;
  color: #fff;
  font-family: Roboto Condensed;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  padding-left: 10%;
  padding-right: 10%;
}
.heroimg {
  position: absolute;
  margin: auto;
  overflow: hidden;
}

@media (max-width: 1028px) {
  .hero-card {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(10, 80px);
    grid-column-gap: 32px;
    /* margin: 60px; */
  }
  .herotext {
    grid-column: 5/9;
    grid-row: 3/9;
    line-height: 26px;
    font-size: 22px;
    padding-left: 5%;
    padding-right: 5%;
  }
  .heroimg-container {
    grid-column: 1/5;
    grid-row: 3/9;
  }
}

@media (max-width: 800px) {
  .hero-card {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(16, 40px);
    grid-gap: 32px;
    /* margin-left: 52px;
    margin-right: 52px; */
  }
  .herotext {
    grid-column: 1/3;
    grid-row: 10/17;
    padding-left: 5%;
    padding-right: 5%;
  }
  .heroimg-container {
    grid-column: 1/3;
    grid-row: 2/10;
  }
}
@media (max-width: 600px) {
  .hero-card {
    grid-template-rows: repeat(19, 40px);
    /* margin-left: 32px;
    margin-right: 32px; */
  }
  .herotext {
    grid-column: 1/3;
    grid-row: 10/19;
    padding-left: 3%;
    padding-right: 3%;
  }
  .heroimg-container {
    grid-column: 1/3;
    grid-row: 2/9;
  }
}
</style>
