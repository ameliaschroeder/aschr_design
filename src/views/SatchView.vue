<template>
  <div class="title">
    <h1 class="pg-title">SATCH</h1>
    <h2 class="pg-subtitle">BACKPACK & PACKING SYSTEM</h2>
  </div>
  <HeroBanner />
  <SatchGallery />
  <SatchContent />
</template>

<script lang="ts">
import SatchContent from "../components/Satch1.vue";
import HeroBanner from "../components/SatchHero.vue";
import SatchGallery from "../components/SatchGallery1.vue";
export default {
  name: "SatchV",
  components: {
    SatchContent,
    HeroBanner,
    SatchGallery,
  },
};
</script>

<style lang="css">
.title {
  color: rgba(255, 255, 255, 1);
  font-family: "Iceland";
  font-size: 32px;
  font-weight: 400;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 52px);
  grid-gap: 32px;
  margin-left: 96px;
  margin-right: 96px;
  margin-bottom: 80px;
}

.pg-title {
  grid-column: 1/3;
  font-size: 80px;
}
.pg-subtitle {
  grid-column: 2/12;
  font-size: 52px;
}

@media (max-width: 1028px) {
  .title {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 52px);
    grid-gap: 32px;
    margin-left: 64px;
    margin-right: 64px;
  }
  .pg-title {
    grid-column: 1/5;
    font-size: 64px;
  }
  .pg-subtitle {
    grid-column: 2/9;
    font-size: 36px;
  }
}
@media (max-width: 800px) {
  .title {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 52px);
    grid-gap: 32px;
    margin-left: 52px;
    margin-right: 52px;
  }
  .pg-title {
    grid-column: 1/2;
    font-size: 52px;
  }
  .pg-subtitle {
    grid-column: 1/3;
    font-size: 28px;
    margin-left: 20px;
  }
}
</style>
