<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/header/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto");
@import "/styles/scss/variables";

body {
  margin: 0;
  margin-top: calc(82px + 50px); // top header + bottom header height
}

h1, h2, h3, h4, h5, h6 {
  font-family: $titleFont;
}

p, span, a, {
  font-family: $bodyFont;
}
</style>
