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
body {
  margin: 0;
  margin-top: calc(82px + 50px); // top header + bottom header height
  min-height: 5000px;
}
</style>
