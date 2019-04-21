<template>
  <header>
    <HeaderTop></HeaderTop>
    <HeaderBottom></HeaderBottom>
  </header>
</template>

<script>
import HeaderTop from "@/components/header/HeaderTop";
import HeaderBottom from "@/components/header/HeaderBottom";

export default {
  name: "Header",
  components: {
    HeaderTop,
    HeaderBottom
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/placeholders";
@import "../../styles/scss/variables";
header {
  @extend %container;
  display: flex;
  justify-content: center;
  background-color: $white;
  height: calc(82px + 50px); // top header + bottom header height
  position: fixed;
  top: 0;
  padding: 0;
  width: 100%;
  z-index: 1;
}
</style>
