<template>
  <div class="about">
    <h1>This is an about pages of qarbar</h1>
    <!-- <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src="../assets/homeImage/h1.jpg" class="img1" alt="">
        </div>
        <div class="slide">
          <img src="../assets/homeImage/h2.jpg" class="img1" alt="">
        </div>
        <div class="slide">
          <img src="../assets/homeImage/h3.jpg" class="img1" alt="">
        </div>
        <div class="slide">
          <img src="../assets/homeImage/h4.jpg" class="img1" alt="">
        </div>
        <div class="slide">
          <img src="../assets/homeImage/h5.jpg" class="img1" alt="">
        </div>
        <div class="slide">
          <img src="../assets/homeImage/h6.jpg" class="img1" alt="">
        </div>
        <div class="slide">
          <img src="../assets/homeImage/h7.jpg" class="img1" alt="">
        </div>
        <div class="slide">
          <img src="../assets/homeImage/h1.jpg" class="img1" alt="">
        </div>
        <div class="slide">
          <img src="../assets/homeImage/h2.jpg" class="img1" alt="">
        </div>
        <div class="slide">
          <img src="../assets/homeImage/h3.jpg" class="img1" alt="">
        </div>
        <div class="slide">
          <img src="../assets/homeImage/h4.jpg" class="img1" alt="">
        </div>
        <div class="slide">
          <img src="../assets/homeImage/h5.jpg" class="img1" alt="">
        </div>
        <div class="slide">
          <img src="../assets/homeImage/h6.jpg" class="img1" alt="">
        </div>
        <div class="slide">
          <img src="../assets/homeImage/h7.jpg" class="img1" alt="">
        </div>
      </div>

    </div> -->
 
 </div>
</template>

<style>
.about {
  min-height: 100vh !important;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}
</style>

<script>
// import { Carousel, CarouselSlide } from 'vue-carousel';

export default {
  // name: 'AboutView',
  components: {
    // Carousel,
    // CarouselSlide,
  },
  data() {
    return {
      images: [{
        id: 1,
        url: 'https://github.com/mdo.png'
      },
      {
        id: 2,
        url: 'https://github.com/mdo.png'
      },
      {
        id: 3,
        url: 'https://github.com/mdo.png'
      },
      ],
    };
  },
};
</script>
