<template>
  <div class="service-tile" v-if="imageAlignment === 'left'">
    <div class="service-description">
      <h3>{{subtitle}}</h3>
      <h2>{{title}}</h2>
      <p>{{description}}</p>
    </div>
    <div
      class="service-image"
      :style="{borderRadius: '0 2px 2px 0'}"
      v-lazy:background-image="image"
    >
      <div class="arrow-right"></div>
    </div>
  </div>
  <div class="service-tile" v-else>
    <div
      class="service-image"
      :style="{borderRadius: '2px 0 0 2px'}"
      v-lazy:background-image="image"
    >
      <div class="arrow-left"></div>
    </div>
    <div class="service-description">
      <h3>{{subtitle}}</h3>
      <h2>{{title}}</h2>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceTile",
  props: {
    image: { type: String },
    title: { type: String },
    subtitle: { type: String },
    description: { type: String },
    imageAlignment: {
      type: String,
      validator: val => ["left", "right"].includes(val)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";

.service-tile {
  @include userSelect(none);
  display: flex;
  flex: 1 1 330px;
  height: 170px;
  box-shadow: 1px 1px 4px -2px $black, 5px 5px 0px 0px $blue;
  transition: box-shadow ease-in-out 0.25s;
  margin: 16px;
  border-radius: 2px;
  .service-image {
    background-size: cover;
    background-position: center;
    width: 50%;
  }
  .service-description {
    width: 50%;
    padding: 8px;
    h3,
    h2,
    p {
      margin: 0;
    }
    h3 {
      font-size: 14px;
      font-style: italic;
      font-family: $bodyFont;
      color: $red;
      letter-spacing: -1px;
    }
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 13px;
    }
  }
  .arrow-left,
  .arrow-right {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    margin-top: 20px;
  }
  .arrow-right {
    border-left: 20px solid white;
  }
  .arrow-left {
    border-right: 20px solid white;
    margin-left: auto;
  }
  &:hover {
    box-shadow: 1px 1px 3px -2px $black, 2px 2px 0px 0px $blue;
  }
}
</style>
