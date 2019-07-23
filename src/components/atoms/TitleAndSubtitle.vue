<template>
  <div class="gallery-title-container">
    <h2>{{title}}</h2>
    <h3>{{subtitle}}</h3>
  </div>
</template>

<script>
export default {
  name: "TitleAndSubtitle",
  props: ["title", "subtitle"]
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";

div {
  &.gallery-title-container {
    border-left: 4px solid $red;
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
    h2,
    h3 {
      margin: 0;
    }
    h2 {
      font-weight: bold;
    }
    h3 {
      font-weight: lighter;
      color: lighten($color: $black, $amount: 25);
      letter-spacing: -1px;
    }
  }
}

@media (max-width: 600px) {
  div {
    &.gallery-title-container {
      h2 {
        font-size: 1.25rem;
      }
      h3 {
        font-size: 1.05rem;
      }
    }
  }
}
</style>
