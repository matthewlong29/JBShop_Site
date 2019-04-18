<template>
  <div class="service-tile">
    <font-awesome-icon :icon="icon"/>
    <div class="title">
      <h2>{{title}}</h2>
      <h3>{{subtitle}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceTile",
  props: ["icon", "title", "subtitle"]
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";
.service-tile {
  z-index: -1;
  display: flex;
  align-items: center;
  border: 1px solid transparentize($color: $gray, $amount: 0.75);
  border-left: 4px solid $red;
  cursor: pointer;
  transition: all 0.25s;
  position: relative;
  margin: 0.5rem;
  height: 70px;
  width: 300px;
  svg {
    width: 50px;
    height: auto;
    padding: 1rem;
    color: $red;
    max-height: 50px;
  }
  .title {
    h2,
    h3 {
      margin: 0;
      font-family: $bodyFont;
    }
    h2 {
      font-size: 16px;
    }
    h3 {
      font-size: 14px;
    }
  }
  &:hover {
    background: $blue;
    color: $white;
    svg {
      color: $white;
    }
  }
}
</style>
