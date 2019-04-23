<template>
  <main>
    <MainSlider></MainSlider>
    <Services></Services>
    <MeetUs></MeetUs>
    <CallToAction
      message="Walk-ins are always welcome, or call now to book an appointment!"
      link="tel:5026954477"
      linkMessage="(502) 695-4477"
    ></CallToAction>
    <ImageGallerySlider></ImageGallerySlider>
    <GoogleMaps></GoogleMaps>
    <Footer></Footer>
  </main>
</template>

<script>
import MainSlider from "@/components/MainSlider";
import Services from "@/components/services/Services";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import GoogleMaps from "@/components/GoogleMaps";
import ImageGallerySlider from "@/components/ImageGallerySlider";
import MeetUs from "@/components/meet-us/MeetUs";

export default {
  name: "home",
  components: {
    MainSlider,
    Services,
    CallToAction,
    Footer,
    GoogleMaps,
    ImageGallerySlider,
    MeetUs
  }
};
</script>
