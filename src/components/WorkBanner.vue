<template>
  <a href="/satch">
    <div class="project-banner">
      <!-- width 100 contain everything, 
      set bg to flat grey similar to background
      max-width 1440px -->

      <div class="banimg-container">
        <!--8-col!-->
        <div class="proj-title s-margin iceland-normal-white">
          <h1>SATCH</h1>
        </div>
        <div class="proj-subtitle s-margin iceland-normal-white">
          <h2>BACKPACK &</h2>
          <h2>PACKING SYSTEM</h2>
        </div>
        <div class="org-svg">
          <img src="../assets/satch-assets/org-sub.svg" class="org-sub" />
          <img src="../assets/satch-assets/org-sub-bg.svg" class="org-sub-bg" />
        </div>

        <div class="grd-rect">
          <!-- empty rectangle div, grey gradient -->
        </div>
        <img
          src="../assets/satch-assets/grd-rect-sm.svg"
          alt="grey gradient"
          class="grd-rect-sm"
        />
        <img
          src="../assets/satch-assets/satch-banner-wider.jpg"
          alt="project banner"
          class="ban-response-img"
        />
      </div>
    </div>
  </a>
</template>

<script lang="ts">
export default {
  name: "ProjectBanner",
};
</script>

<style lang="css">
a {
  text-decoration: none;
}
.project-banner {
  display: grid;
  grid-template-rows: repeat(8, 80px);
  grid-row-gap: 0px;
  margin-top: 80px;
}
.proj-title {
  grid-row: 3/4;
  z-index: 4;
  text-align: left;
  font-size: 52px;
  line-height: 52px;
}

.proj-subtitle {
  grid-row: 5/7;
  z-index: 4;
  text-align: left;
  font-size: 40px;
  letter-spacing: -1.28px;
}

.banimg-container {
  grid-row: 1/8;
  max-width: 1440px;
  position: relative;
  overflow: hidden;
  text-align: center;

  display: grid;
  grid-template-rows: repeat(8, 80px);
  grid-row-gap: 0px;
}
.ban-response-img {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  object-fit: cover;
  object-position: 100% 0;
  max-width: 1440px;
  z-index: 1;
}
.org-svg {
  /* width: 584px;
  height: 640px; */
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
}
.org-sub {
  visibility: hidden;
}
.org-sub-bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 560px;
  object-fit: cover;
  object-position: 100% 0;
  max-width: 1440px;
  z-index: 1;
}

.grd-rect {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 66%;
  background: linear-gradient(
    90deg,
    #282828 0%,
    rgba(40, 40, 40, 0.83) 41.06%,
    rgba(40, 40, 40, 0.71) 53.02%,
    rgba(40, 40, 40, 0.37) 75.16%,
    rgba(137, 137, 137, 0.31) 86.68%,
    rgba(217, 217, 217, 0) 100%
  );
  z-index: 2;
}
.grd-rect-sm {
  visibility: hidden;
}

@media (max-width: 1028px) {
  .project-banner {
    grid-template-rows: repeat(7, 80px);
  }

  .banimg-container {
    grid-row: 1/7;
    grid-template-rows: repeat(7, 80px);
  }

  .proj-title {
    font-size: 48px;
    line-height: 48px;
  }
  .proj-subtitle {
    font-size: 32px;
  }
  .org-sub-bg {
    height: 480px;
  }
}

@media (max-width: 800px) {
  .project-banner {
    grid-template-rows: repeat(9, 80px);
  }
  .banimg-container {
    grid-row: 1/10;
    grid-template-rows: repeat(9, 80px);
  }
  .ban-response-img {
    height: 560px;
  }
  .proj-title {
    font-size: 32px;
    line-height: 32px;
    grid-row: 7/8;
  }
  .proj-subtitle {
    font-size: 24px;
    grid-row: 8/10;
  }

  .grd-rect {
    bottom: 0;
    left: 0;
    height: 460px;
    width: 100%;
    background-image: url("../assets/satch-assets/grd-rect-sm.svg");
    margin-top: auto;
  }
  /* .grd-rect-sm {
    visibility: visible;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 2;
  } */
  .org-sub {
    visibility: visible;
    position: absolute;
    width: 850px;
    /* height: 100%; */
    object-position: 100% 0;
    object-fit: cover;
    bottom: 0;
    right: 0;
  }
  .org-sub-bg {
    visibility: hidden;
  }
  .org-svg {
    width: 100%;
    height: 720px;
  }
}

@media (max-width: 450px) {
  .project-banner {
    grid-template-rows: repeat(8, 80px);
  }
  .banimg-container {
    grid-row: 1/9;
    grid-template-rows: repeat(8, 80px);
  }
  .ban-response-img {
    height: 480px;
  }
  .org-sub {
    position: absolute;
    bottom: 0;
    right: 0;
    /* height: 640px; */
    object-fit: cover;
    object-position: 100% 0;
  }
  .org-svg {
    width: 100%;
    height: 640px;
  }
  .proj-title {
    font-size: 32px;
    line-height: 32px;
    grid-row: 6/7;
  }
  .proj-subtitle {
    font-size: 24px;
    grid-row: 7/9;
  }
}
</style>

<!-- <svg
xmlns="http://www.w3.org/2000/svg"
width="584"
height="560"
viewBox="0 0 584 560"
fill="none"
>
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M584 0H0V640H584V616H60C48.9543 616 40 607.046 40 596V8H584V0Z"
  fill="url(#paint0_linear_409_41)"
  fill-opacity="0.6"
/>
<defs>
  <linearGradient
    id="paint0_linear_409_41"
    x1="5.43892e-06"
    y1="280"
    x2="584"
    y2="280"
    gradientUnits="userSpaceOnUse"
  >
    <stop stop-color="#DA4405" />
    <stop offset="1" stop-color="#DA4405" stop-opacity="0" />
  </linearGradient>
</defs>
</svg> -->
