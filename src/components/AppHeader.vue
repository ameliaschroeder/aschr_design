<template>
  <header>
    <nav>
      <div class="header-container">
        <div class="text-container">
          <ul class="nav-ul">
            <li>
              <router-link class="nav-li" to="/about">ABOUT ME</router-link>
            </li>
            <li><router-link class="nav-li" to="/"> MY WORK</router-link></li>
          </ul>
        </div>
        <div class="headimg-container">
          <picture class="header-img">
            <source
              srcset="../assets/header.png"
              media="(min-width: 600px)"
              class="head-bg"
            />
            <img src="../assets/header-sm.svg" alt="about" class="head-bg" />
          </picture>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
.header-container {
  // height: 300px;
  // margin-right: 7.35px;
  //position: relative;
  width: 100%;
  // padding: 0%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 80px);
}

.headimg-container {
  grid-column: 1/3;
  grid-row: 1/6;
  text-align: initial;
  position: relative;
  z-index: 1;
}
.headimg-container img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.head-bg {
  height: 100%;
  // aspect-ratio: 10/35;
}
// .text-grid {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: repeat(5, 80px);
// }
.text-container {
  //set grid position
  grid-column: 2/3;
  grid-row: 4/6;
  align-self: center;
  z-index: 2;
  // make flex columns for nav items
  // display: flex;
  // flex-direction: row;
}
.nav-ul {
  list-style: none;
  color: rgba(255, 255, 255, 1);
  font-family: "Iceland";
  font-size: 32px;
  font-weight: 400;
  padding: 0;
  // font-style: normal;
  //align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // gap: 10%;
  // margin-right: 20%;
  // position: absolute;
  // min-width: 495px;
  // top: 200px;
  // width: 150px;
  align-self: flex-end;
  justify-content: space-evenly;
  align-self: center;
}
.nav-li {
  display: inline-block;
  width: 150px;
  height: 40px;
}

//  .nav-ul li {
//   display: inline;
//   margin-left: 7.3%;
//   width: 14.3%;
// }

@media (max-width: 1000px) {
  .text-container {
    grid-row: 4/6;
    // justify-self: center;
    align-items: center;
  }
  .nav-ul {
    align-items: center;
    height: 100%;
  }
}

@media (max-width: 600px) {
}

// keeps the nav links white
a,
a.router-link-active,
a.router-link-exact-active {
  color: var(--white);
  cursor: pointer;
}

// .header-text {
//   display: flex;
//   align-items: flex-start;

//   gap: 14.6%;
//   height: fit-content;
//   left: 60%;
//   min-width: 495px;
//   position: absolute;
//   top: 264px;
// }

// .title {
//   align-self: flex-end;
//   letter-spacing: -0.96px;
//   line-height: normal;
//   min-height: 47px;
//   min-width: 0;
//   white-space: nowrap;
// }
// header {
//   display: flex;
//   padding: 0;
//   width: 100%;
// }
//.header-img {
// height: 100%;
// left: 0;
// position: absolute;
// top: 0;
// width: 99%;
// max-height: 300px;
//}

// .title a {
//   color: var(--white);
// }
// nav {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
// }
</style>
