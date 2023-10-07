<template>
  <footer>
    <div class="footer-container">
      <div class="text-container"></div>
      <!-- <div class="footimg-container"> -->
      <picture class="footer-img">
        <source
          srcset="../assets/header.png"
          media="(min-width: 600px)"
          class="foot-bg"
        />
        <img src="../assets/header-sm.svg" alt="about" class="foot-bg" />
      </picture>
      <!-- </div> -->
      <!-- <img
        src="../assets/footer-rect.svg"
        alt="grey rectangle"
        class="foot-rect"
      /> -->
      <div class="foot-rect"></div>
      <h3 class="foot-txt-1 s-margin">
        get in touch! <br />
        amelia.schroeder62@gmail.com
        <!-- <a href="mailto:amelia.schroeder62@gmail.com"></a> -->
      </h3>
      <h3 class="foot-txt-2 s-margin mw-1248">
        this website is still in development <br />
        please report any bugs to amelia.schroeder62@gmail.com
      </h3>
    </div>
  </footer>

  <!-- <a href="mailto:webmaster@example.com"></a> -->
</template>

<style lang="scss">
.footer-container {
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: repeat(6, 80px);
  grid-template-columns: repeat(2, 1fr);
  margin-top: 80px;
}
.footer-img {
  width: 100%;
  grid-column: 1/3;
  grid-row: 1/7;
  overflow: hidden;
}

.footimg-container {
  height: 400px;
  // text-align: center;
  position: relative;
  // position: absolute;
  // top: 0;
  width: 100%;
  margin-top: auto;
}
// .footimg-container img {
//   // position: absolute;
//   // left: 50%;
//   // transform: translateX(-50%);
// }
.foot-bg {
  height: 400px;
  position: absolute;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
  // aspect-ratio: 10/35;
}
.foot-rect {
  // position: absolute;
  // height: 160px;
  // bottom: 0;
  // z-index: 2;
  grid-row: 3/7;
  grid-column: 1/3;
  z-index: 2;
  background-image: url("../assets/footer-rect.svg");
  background-repeat: repeat;
}

.foot-txt-1 {
  grid-row: 3/5;
  grid-column: 1/3;
  margin-top: 52px;
  z-index: 3;
  font-family: Iceland;
  font-size: 32px;
  color: white;
}
.foot-txt-2 {
  grid-row: 5/6;
  grid-column: 1/3;
  text-align: right;
  z-index: 3;
  top: 0;
  font-family: Iceland;
  font-size: 24px;
  color: white;
}

@media (max-width: 800px) {
  .foot-txt-1 {
    font-size: 24px;
  }
  .foot-txt-2 {
    font-size: 18px;
  }
}
</style>
