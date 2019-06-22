<template>
  <section id="image-gallery">
    <div class="image-slider-control">
      <TitleAndSubtitle title="Our Gallery" subtitle="Some subtitle about the gallery.."></TitleAndSubtitle>
      <div>
        <button v-on:click="incrementMargin(); userHasControl = true" :disabled="marginVal >= -30">
          <font-awesome-icon icon="arrow-left"/>
        </button>
        <button
          v-on:click="decrementMargin(); userHasControl = true"
          :disabled="marginVal < -imageWidth * 11"
        >
          <font-awesome-icon icon="arrow-right"/>
        </button>
      </div>
    </div>
    <div class="images-container" :style="{marginLeft: marginVal + 'px'}">
      <div
        class="image"
        v-for="image in images"
        :key="image.id"
        :style="{ flex: `0 0 ${imageWidth}px`}"
        v-lazy:background-image="image.url"
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
import TitleAndSubtitle from "@/components/atoms/TitleAndSubtitle";
import { setTimeout, setInterval, clearTimeout } from "timers";

export default {
  name: "ImageGallerySlider",
  components: {
    TitleAndSubtitle
  },
  data() {
    return {
      marginVal: 0,
      userHasControl: false,
      imageWidth: null,
      images: [
        {
          url: "/images/gallery/washing-car.jpg",
          category: "Washing Car",
          message: "Your car gets washed before you get it back"
        },
        {
          url: "/images/gallery/taping-to-paint.jpg",
          category: "Painting",
          message: "Preparing for painting"
        },
        {
          url: "/images/gallery/shop-work-area.jpg",
          category: "Building",
          message: "Back of the main building"
        },
        {
          url: "/images/gallery/painting-technique.jpg",
          category: "Paint",
          message: "Painters do light body work too"
        },
        {
          url: "/images/gallery/shop-body-building.jpg",
          category: "Building",
          message: "Second building"
        },
        {
          url: "/images/gallery/shop-back-lot.jpg",
          category: "Building",
          message: "Back lot of main building"
        },
        {
          url: "/images/gallery/paint-booth.jpg",
          category: "Paint",
          message: "Inside one of the paint booths"
        },
        {
          url: "/images/gallery/shop-garages.jpg",
          category: "Building",
          message: "Back lot and garages"
        },
        {
          url: "/images/gallery/general-repair.jpg",
          category: "General Collision Repair",
          message: "Light body work"
        },
        {
          url: "/images/gallery/shop-main-building.jpg",
          category: "Building",
          message: "Outside front office"
        },
        {
          url: "/images/gallery/project-one-before.jpg",
          category: "Project One",
          message: "Before repair"
        },
        {
          url: "/images/gallery/project-one-after.jpg",
          category: "Project One",
          message: "After repair"
        },
        {
          url: "/images/gallery/project-two-before.jpg",
          category: "Project Two",
          message: "Before repair"
        },
        {
          url: "/images/gallery/project-two-after.jpg",
          category: "Project Two",
          message: "After repair"
        },
        {
          url: "/images/gallery/shop-building-title.jpg",
          category: "Building",
          message: "Jb Long and Son Body Shop"
        }
      ]
    };
  },
  /**
   *
   */
  beforeMount() {
    this.calculateImageWidth();
  },
  /**
   * when component is created: increments and decrements margin while user doesnt have control.
   */
  created() {
    window.addEventListener("resize", this.calculateImageWidth);

    let movingRight = true;
    let movingLeft = false;

    // setInterval(() => {
    //   if (!this.userHasControl) {
    //     if (movingRight) {
    //       movingRight = this.decrementMargin();
    //       movingLeft = !movingRight;
    //     } else {
    //       movingLeft = this.incrementMargin();
    //       movingRight = !movingLeft;
    //     }
    //   }
    // }, 3000);
  },
  methods: {
    /**
     * decrementMargin: decrement margin by the width of the image.
     * TODO: instead of incrementing width of images increment by width of section / num of images
     */
    decrementMargin() {
      if (this.marginVal > -this.imageWidth * 11) {
        this.marginVal -= this.imageWidth + 24;
        return true;
      }

      return false;
    },
    /**
     * incrementMargin: increment margin by the width of the image.
     */
    incrementMargin() {
      if (this.marginVal < 0) {
        this.marginVal += this.imageWidth + 24;
        return true;
      }

      return false;
    },
    /**
     * calculateImageWidth: calculate image width based on size of window.
     */
    calculateImageWidth() {
      const clientWidth = document.documentElement.clientWidth;

      if (clientWidth > 800) {
        this.imageWidth = clientWidth / 4 - 24;
      } else if (clientWidth <= 800 && clientWidth > 600) {
        this.imageWidth = clientWidth / 3 - 24;
      } else if (clientWidth <= 600 && clientWidth > 400) {
        this.imageWidth = clientWidth / 2 - 24;
      } else {
        this.imageWidth = clientWidth - 24;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";
@import "../../styles/scss/placeholders";

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

#image-gallery {
  overflow: hidden;
  margin: 5rem auto;
  .image-slider-control {
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
  .images-container {
    display: flex;
    width: 100%;
    transition: margin-left ease-in-out 0.25s;
    white-space: nowrap;
    .image {
      flex: auto;
      height: 200px;
      margin: 10px;
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
        @include userSelect(none);
        h3 {
          color: $red;
          font-size: 1rem;
        }
        p {
          color: $white;
          padding-bottom: 1rem;
          font-size: 0.85rem;
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

@media (max-width: 600px) {
  #image-gallery {
    .images-container {
      .image {
        .overlay-bottom {
          h3 {
            font-size: 0.9rem;
          }
          p {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
}
</style>