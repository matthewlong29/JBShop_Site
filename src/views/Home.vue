<template>
  <main id="home">
    <MainSlider></MainSlider>
    <Services id="about"></Services>
    <CallToAction></CallToAction>
    <MeetUs id="team"></MeetUs>
    <NowHiring id="jobs"></NowHiring>
    <ImageGallerySlider></ImageGallerySlider>
    <Contact id="contact"></Contact>
    <GoogleMaps></GoogleMaps>
    <Footer></Footer>
  </main>
</template>

<script>
import MainSlider from "@/components/MainSlider";
import Services from "@/components/services/Services";
import NowHiring from "@/components/openings/NowHiring";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import GoogleMaps from "@/components/GoogleMaps";
import ImageGallerySlider from "@/components/ImageGallerySlider";
import MeetUs from "@/components/meet-us/MeetUs";
import Contact from "@/components/Contact";

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
    Contact,
    NowHiring
  }
};
</script>
