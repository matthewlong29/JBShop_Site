<template>
  <a :href="link">
    <button>
      <div class="button-icon-container">
        <font-awesome-icon :icon="icon"/>
      </div>
      <div class="button-content-container" v-if="topText || bottomText">
        <span>{{topText}}</span>
        <span>{{bottomText}}</span>
      </div>
    </button>
  </a>
</template>

<script>
export default {
  name: "Button",
  props: ["link", "icon", "topText", "bottomText"]
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";

a {
  @include userSelect(none);
  text-decoration: none;
  button {
    cursor: pointer;
    display: flex;
    background-color: darken($color: $white, $amount: 0.5);
    padding: 0;
    border: none;
    border-radius: 2px;
    box-shadow: 2px 2px 0 2px darken($color: $white, $amount: 10);
    transition: box-shadow 0.15s ease;
    .button-icon-container {
      box-shadow: -2px 2px 0 2px darken($color: $red, $amount: 1);
      border-radius: 2px 0 0 2px;
      transition: box-shadow 0.15s ease;
      svg {
        padding: 12px;
        height: 22px;
        width: auto;
        background-color: $red;
        color: $white;
        vertical-align: -2em;
      }
    }
    .button-content-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 1rem;
      margin: auto 0;
      transition: box-shadow 0.15s ease;
      span {
        &:first-of-type {
          color: $black;
          font-size: 16px;
        }
        &:last-of-type {
          color: $red;
          font-size: 12px;
        }
      }
    }
    &:hover {
      box-shadow: 1px 1px 0 1px darken($color: $white, $amount: 10);
      .button-icon-container {
        box-shadow: -1px 1px 0 1px darken($color: $red, $amount: 1);
      }
    }
  }
}
</style>
