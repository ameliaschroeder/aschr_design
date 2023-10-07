<template>
  <div class="wrapper">
    <picture class="ab">
      <source
        srcset="../assets/group-4.svg"
        media="(min-width: 1000px)"
        class="ab-big"
      />
      <source
        srcset="../assets/group-4-med.svg"
        media="(min-width: 600px)"
        class="ab-med"
      />
      <img src="../assets/group-4-sm.svg" alt="about" class="ab-sm" />
    </picture>
  </div>
</template>

<script lang="ts">
export default {
  name: "AboutGraphic",
};
</script>

<style lang="css">
.ab {
  width: 100%;
  margin: 20px;
}
.ab-sm {
  width: 100%;
}

@media (min-width: 1000px) {
  .ab {
    margin: 72px;
  }
}

@media (min-width: 600px) {
  .ab {
    margin: 60px;
  }
}
</style>
