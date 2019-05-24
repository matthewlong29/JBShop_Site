<template>
  <section class="call-to-action">
    <div class="content-container">
      <h2>
        <strong>Walk-ins</strong> are always welcome!
      </h2>
      <h3>
        or
        <strong>Call now</strong> to book an appointment!
      </h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <Button
        link="tel:5026954477"
        topText="(502) 695-4477"
        bottomText="Call now to schedule your free consultation!"
        icon="phone"
      ></Button>
    </div>
    <div
      class="image-container"
      :style="{height: `${contentHeight + (contentHeight / 5)}px`}"
      v-lazy:background-image="'/images/call-to-action.jpg'"
    ></div>
  </section>
</template>

<script>
import Button from "@/components/partials/Button";

export default {
  name: "CallToAction",
  components: { Button },
  data() {
    return {
      contentHeight: 0
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      this.contentHeight = this.$el.firstElementChild.clientHeight;
      console.log("this.contentHeight: " + this.contentHeight);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
@import "../styles/scss/placeholders";

* {
  transition: all ease-in-out 0.25s;
}

.call-to-action {
  display: flex;
  align-items: center;
  width: 100vw;
  .content-container {
    @extend %container;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 5rem;
    width: calc(200% / 3);
    min-height: 300px;
    background: repeating-linear-gradient(
      -55deg,
      lighten($color: $red, $amount: 15),
      lighten($color: $red, $amount: 15) 300px,
      lighten($color: $red, $amount: 28) 300px,
      lighten($color: $red, $amount: 28) 600px
    );
    color: $white;
    border-radius: 2px;
    h2,
    h3,
    p {
      color: $black;
      font-weight: normal;
      margin: 0;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    p {
      padding: 1rem 0 3rem;
    }
  }
  .image-container {
    width: calc(100% / 3);
    background-position: center right;
    background-size: cover;
    border-radius: 6px 0 0 6px;
    box-shadow: 0 0 4px 2px transparentize($color: $black, $amount: 0.75);
  }
  &:hover {
    .image-container {
      box-shadow: 0 0 12px 3px transparentize($color: $black, $amount: 0.75);
    }
  }
}

@media (max-width: 600px) {
  .call-to-action {
    .content-container {
      width: 100%;
    }
    .image-container {
      display: none;
    }
  }
}
</style>
