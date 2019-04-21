<template>
  <section class="image-gallery">
    <div class="image-slider-control">
      <h2>Our Gallery</h2>
      <div>
        <button v-on:click="decrementMargin()" :disabled="marginVal < -300 * 10">
          <font-awesome-icon icon="arrow-left"/>
        </button>
        <button v-on:click="incrementMargin()" :disabled="marginVal >= -30">
          <font-awesome-icon icon="arrow-right"/>
        </button>
      </div>
    </div>
    <div class="images-container" :style="{marginLeft: marginVal + 'px'}">
      <img v-for="image in images" :key="image.id" :src="image">
    </div>
  </section>
</template>

<script>
export default {
  name: "ImageGallerySlider",
  data() {
    return {
      images: [
        "/images/stock/1.jpg",
        "/images/stock/2.jpg",
        "/images/stock/3.jpg",
        "/images/stock/4.jpg",
        "/images/stock/5.jpg",
        "/images/stock/6.jpg",
        "/images/stock/7.jpg",
        "/images/stock/8.jpg",
        "/images/stock/9.jpg",
        "/images/stock/10.jpg",
        "/images/stock/11.jpg",
        "/images/stock/12.jpg",
        "/images/stock/13.jpg",
        "/images/stock/14.jpg",
        "/images/stock/15.jpg"
      ],
      marginVal: -30
    };
  },
  methods: {
    /*****
     * TODO: instead of incrementing width of images increment by width of section / num of images
     */
    decrementMargin() {
      if (this.marginVal > -300 * 10) {
        this.marginVal -= 310;
        console.log(`changed marginVal to ${this.marginVal}`);
      } else {
        console.log("cannot decrement any further");
      }
    },
    /*****
     */
    incrementMargin() {
      if (this.marginVal < 0) {
        this.marginVal += 310;
        console.log(`changed marginVal to ${this.marginVal}`);
      } else {
        console.log("cannot increment any further");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
@import "../styles/scss/placeholders";

section.image-gallery {
  overflow: hidden;
  margin: 5rem auto;
  div.image-slider-control {
    @extend %container;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid transparentize($color: $gray, $amount: 0.8);
    button {
      height: 40px;
      width: 40px;
      background: transparent;
    }
  }
  div.images-container {
    display: flex;
    width: 100%;
    transition: margin-left ease-in-out 0.25s;
    img {
      height: 100%;
      width: 296px;
      margin: 10px 0 10px 10px;
      border: 2px solid transparentize($color: $red, $amount: 0.5);
    }
  }
}
</style>
