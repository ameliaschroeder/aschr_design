<template>
  <div class="img-gallery s-margin s-col2">
    <div class="img1-container galimg-containers">
      <img
        src="../assets/satch-assets/satchgal-img1.png"
        alt="satch pack"
        class="response-img-40"
        id="satchgal-img1"
      />
    </div>
    <div class="img2-container galimg-containers">
      <img
        src="../assets/satch-assets/satchgal-img2-wide.png"
        alt="satch pack"
        class="response-img"
        id="satchgal-img2"
      />
    </div>
    <div class="img3-container galimg-containers">
      <img
        src="../assets/satch-assets/satchgal-img3-wide.png"
        alt="satch pack"
        class="response-img"
        id="satchgal-img3"
      />
    </div>
    <div class="img4-container galimg-containers">
      <img
        src="../assets/satch-assets/satchgal-img4.png"
        alt="satch pack"
        class="response-img"
        id="satchgal-img4"
      />
    </div>
    <div class="img5-container galimg-containers">
      <img
        src="../assets/satch-assets/satchgal-img5.png"
        alt="satch pack"
        class="response-img"
        id="satchgal-img5"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SatchGallery",
};
</script>

<style lang="css">
.img-gallery {
  margin-left: 96px;
  margin-right: 96px;
  margin-top: 80px;
  /* background: rgba(166, 167, 188, 0.2); */
  border-radius: 30px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(19, 40px);
  grid-gap: 40px;
  max-width: 1250px;
}

.img1-container {
  grid-column: 1/5;
  grid-row: 1/8;
}
.img2-container {
  grid-column: 6/13;
  grid-row: 1/8;
}
.img3-container {
  grid-column: 1/6;
  grid-row: 9/19;
}
.img4-container {
  grid-column: 7/13;
  grid-row: 9/14;
}
.img5-container {
  grid-column: 7/13;
  grid-row: 14/19;
}

.galimg-containers {
  overflow: hidden;
  text-align: center;
  border-radius: 20px;
  position: relative;
}
.response-img-40 {
  /* flex-basis: 40%; */
  height: 100%;
  position: relative;
  left: 25%;
  transform: translateX(-40%);
  border-radius: 20px;
}

/* this one needs a few extra breaks to make sure everything is in order */

@media (max-width: 1028px) {
  /* height metrics */
  .img-gallery {
    grid-template-rows: repeat(14, 40px);
  }

  .img1-container {
    grid-column: 1/6;
    grid-row: 1/6;
  }
  .img2-container {
    grid-column: 6/13;
    grid-row: 1/6;
  }
  .img3-container {
    grid-column: 1/6;
    grid-row: 6/14;
  }
  .img4-container {
    grid-column: 6/13;
    grid-row: 6/10;
  }
  .img5-container {
    grid-column: 6/13;
    grid-row: 10/14;
  }
}
@media (max-width: 800px) {
  .img-gallery {
    grid-template-rows: repeat(11, 40px);
  }

  .img1-container {
    grid-column: 1/3;
    grid-row: 1/5;
  }
  .img2-container {
    grid-column: 3/7;
    grid-row: 1/5;
  }
  .img3-container {
    grid-column: 1/4;
    grid-row: 5/11;
  }
  .img4-container {
    grid-column: 4/7;
    grid-row: 5/8;
  }
  .img5-container {
    grid-column: 4/7;
    grid-row: 8/11;
  }
}
@media (max-width: 600px) {
  .img-gallery {
    grid-template-rows: repeat(30, 40px);
  }

  .img1-container {
    /* 4-row */
    grid-column: 1/3;
    grid-row: 1/8;
  }
  .img2-container {
    /* 4-row */
    grid-column: 1/3;
    grid-row: 8/13;
  }
  .img3-container {
    /* 8-row */
    grid-column: 1/3;
    grid-row: 13/21;
  }
  .img4-container {
    /* 4-row */
    grid-column: 1/3;
    grid-row: 21/25;
  }
  .img5-container {
    /* 4-row */
    grid-column: 1/3;
    grid-row: 25/29;
  }
}

@media (max-width: 450px) {
  .img-gallery {
    grid-template-rows: repeat(28, 40px);
    row-gap: 20px;
  }
  .img1-container {
    /* 4-row */
    grid-column: 1/3;
    grid-row: 1/7;
  }
  .img2-container {
    /* 4-row */
    grid-column: 1/3;
    grid-row: 7/12;
  }
  .img3-container {
    /* 8-row */
    grid-column: 1/3;
    grid-row: 12/20;
  }
  .img4-container {
    /* 4-row */
    grid-column: 1/3;
    grid-row: 20/24;
  }
  .img5-container {
    /* 4-row */
    grid-column: 1/3;
    grid-row: 24/28;
  }
}
</style>
