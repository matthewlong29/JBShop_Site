<template>
  <main>
    <MainSlider></MainSlider>
    <Services></Services>
    <CallToAction
      message="Walk-ins are always welcome, or call now to book an appointment!"
      link="tel:5026954477"
      linkMessage="(502) 695-4477"
    ></CallToAction>
  </main>
</template>

<script>
import MainSlider from "@/components/MainSlider";
import Services from "@/components/services/Services";
import CallToAction from "@/components/CallToAction";

export default {
  name: "home",
  components: {
    MainSlider,
    Services,
    CallToAction
  }
};
</script>
