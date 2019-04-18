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

section.call-to-action {
  width: 100vw;
  background-color: lighten($color: $red, $amount: 1);
  padding: 50px 0;
  div {
    @extend %container;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid transparentize($color: $white, $amount: 0.5);
    background-color: darken($color: $red, $amount: 5);
    color: $white;
    h2 {
      font-weight: normal;
    }
    a {
      color: $white;
      text-decoration: none;
      background-color: darken($color: $red, $amount: 20);
      padding: 10px;
    }
  }
}
</style>
