<template>
  <section class="call-to-action">
    <div>
      <h2>{{message}}</h2>
      <a :href="link">{{linkMessage}}</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "CallToAction",
  props: ["message", "link", "linkMessage"]
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
@import "../styles/scss/placeholders";

.call-to-action {
  @include createBackground(
    lighten($color: $red, $amount: 0.5),
    lighten($color: $red, $amount: 2),
    "/images/textures/concrete-dark.jpg"
  );
  width: 100vw;
  padding: 50px 0;
  div {
    @extend %container;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid transparentize($color: $white, $amount: 0.5);
    background-color: darken($color: $red, $amount: 5);
    color: $white;
    border-radius: 2px;
    h2 {
      font-weight: normal;
      max-width: 800px;
    }
    a {
      @include createBackground(
        darken($color: $red, $amount: 20),
        darken($color: $red, $amount: 20),
        "/images/textures/concrete-dark.jpg"
      );
      display: flex;
      justify-content: center;
      color: $white;
      text-decoration: none;
      padding: 10px;
      border-radius: 2px;
      min-width: 120px;
      box-shadow: 0 0 6px 3px transparentize($color: $black, $amount: 0.75), 0 0 0 1px transparentize($color: $black, $amount: 0.15);
      transition: box-shadow ease-in-out 0.15s;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 8px 4px transparentize($color: $black, $amount: 0.75), 0 0 0 1px transparentize($color: $black, $amount: 0.15);
      }
    }
  }
}
</style>
