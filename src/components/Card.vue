<!-- this is the component for all of the cards on the 'my work' page -->

<template>
  <article class="card-1">
    <img v-bind:src="imagesource" class="rectangle-60" alt="image" />
  </article>
</template>

<script lang="ts">
export default {
  name: "ProjectCard",
  props: { imagesource: String },
};
</script>

<style>
.card-1 {
  align-items: center;
  background-image: url(../assets/rect.png);
  background-position: 50% 50%;
  background-size: cover;
  margin-left: 1px;
  border-radius: 20px;
  min-height: 0px;
}

.rectangle-60 {
  /* background-color: var(--silver); */
  border-radius: 20px;
  height: 90%;
  width: 90%;
  padding: 5%;
}
</style>
