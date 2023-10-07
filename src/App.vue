<!-- <template>
  <div class="main">
    <router-view />
  </div>
</template>
<style>
.main {
  background-image: url("@/assets/background.svg");
  background-size: cover;
}
</style> -->

<template>
  <div class="frame-1 screen">
    <div class="overlap-group">
      <AppHeader />
      <router-view></router-view>
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts">
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
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

<style>
.frame-1 {
  background-color: #282828;
  height: max-content;
  width: 100%;
}

.overlap-group {
  align-items: center;
  background-image: url(./assets/background.svg);
  background-size: 100%;

  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10%;
  justify-content: space-between; */
  /* min-height: 2616px; */
  width: 100%; /*online its 1400px*/
  height: fit-content;
  min-height: 0;
  border-width: 0px;
}

@media (max-width: 1028px) {
  .overlap-group {
    background-size: 1400px;
  }
}
</style>
