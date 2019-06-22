<template>
  <main id="home">
    <MainSlider id="main-slider"></MainSlider>
    <Services id="about"></Services>
    <CallToAction id="call-to-action"></CallToAction>
    <MeetUs id="team"></MeetUs>
    <NowHiring id="jobs"></NowHiring>
    <ImageGallerySlider id="image-gallery"></ImageGallerySlider>
    <GoogleMaps id="google-maps"></GoogleMaps>
    <Footer id="footer"></Footer>
  </main>
</template>

<script>
import MainSlider from "@/components/organisms/MainSlider";
import Services from "@/components/organisms/Services";
import NowHiring from "@/components/organisms/NowHiring";
import CallToAction from "@/components/organisms/CallToAction";
import Footer from "@/components/organisms/Footer";
import GoogleMaps from "@/components/organisms/GoogleMaps";
import ImageGallerySlider from "@/components/organisms/ImageGallerySlider";
import MeetUs from "@/components/organisms/MeetUs";

export default {
  name: "home",
  components: {
    MainSlider,
    Services,
    CallToAction,
    Footer,
    GoogleMaps,
    ImageGallerySlider,
    MeetUs,
    NowHiring
  }
};
</script>
