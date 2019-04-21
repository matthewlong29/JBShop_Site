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
      <div
        class="image"
        v-for="image in images"
        :key="image.id"
        :style="{backgroundImage: `url(${image.url})`}"
      >
        <div class="overlay-top"></div>
        <div class="overlay-bottom">
          <h3>{{image.category}}</h3>
          <p>{{image.message}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ImageGallerySlider",
  data() {
    return {
      images: [
        {
          url: "/images/stock/1.jpg",
          category: "Body Work",
          message: "im some message for image 1"
        },
        {
          url: "/images/stock/2.jpg",
          category: "Quality Control",
          message: "im some message for image 2"
        },
        {
          url: "/images/stock/3.jpg",
          category: "Body Work",
          message: "im some message for image 3"
        },
        {
          url: "/images/stock/4.jpg",
          category: "Body Work",
          message: "im some message for image 4"
        },
        {
          url: "/images/stock/5.jpg",
          category: "Body Work",
          message: "im some message for image 5"
        },
        {
          url: "/images/stock/6.jpg",
          category: "Paint",
          message: "im some message for image 6"
        },
        {
          url: "/images/stock/7.jpg",
          category: "Quality Control",
          message: "im some message for image 7"
        },
        {
          url: "/images/stock/8.jpg",
          category: "Quality Control",
          message: "im some message for image 8"
        },
        {
          url: "/images/stock/9.jpg",
          category: "Quality Control",
          message: "im some message for image 9"
        },
        {
          url: "/images/stock/10.jpg",
          category: "Quality Control",
          message: "im some message for image 10"
        },
        {
          url: "/images/stock/11.jpg",
          category: "Quality Control",
          message: "im some message for image 11"
        },
        {
          url: "/images/stock/12.jpg",
          category: "Body Work",
          message: "im some message for image 12"
        },
        {
          url: "/images/stock/13.jpg",
          category: "Quality Control",
          message: "im some message for image 13"
        },
        {
          url: "/images/stock/14.jpg",
          category: "Quality Control",
          message: "im some message for image 14"
        },
        {
          url: "/images/stock/15.jpg",
          category: "Quality Control",
          message: "im some message for image 15"
        }
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

@keyframes slide-up-fade-in {
  0% {
    opacity: 0;
    transform: translate(0px, 40px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

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
    div.image {
      height: 200px;
      min-width: 296px;
      margin: 10px 0 10px 10px;
      background-size: cover;
      background-position: center;
      border: 2px solid lighten($color: $red, $amount: 5);
      position: relative;
      .overlay-top {
        position: absolute;
        background-color: transparentize($color: $gray, $amount: 0.25);
        width: 100%;
        height: 0%;
        transition: height ease-in-out 0.25s;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .overlay-bottom {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        h3 {
          color: $red;
        }
        p {
          color: $white;
          padding-bottom: 1rem;
        }
      }
      &:hover {
        .overlay-top {
          height: 100%;
        }
        .overlay-bottom {
          height: 100%;
          visibility: visible;
          h3,
          p {
            margin: 0;
            animation: slide-up-fade-in ease 0.25s;
          }
        }
      }
    }
  }
}
</style>
