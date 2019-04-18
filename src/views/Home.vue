<template>
  <main>
    <MainSlider></MainSlider>
    <Services></Services>
  </main>
</template>

<script>
import MainSlider from "@/components/MainSlider";
import Services from "@/components/services/Services";

export default {
  name: "home",
  components: {
    MainSlider,
    Services
  }
};
</script>
