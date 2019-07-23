<template>
  <div id="app">
    <Header/>
    <main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto");
@import "/styles/scss/variables";

body {
  margin: 0;
  margin-top: calc(82px + 50px); // top header + bottom header height
  overflow-x: hidden;
}

main {
  min-height: calc(100vh - 132px - 289.25px); // minus height of header and footer
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $titleFont;
  letter-spacing: 1px;
}

p,
span,
a {
  font-family: $bodyFont;
  letter-spacing: -1px;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
