<template>
  <main id="home">
    <MainSlider id="main-slider"></MainSlider>
    <Services id="about"></Services>
    <CallToAction id="call-to-action"></CallToAction>
    <MeetUs id="team"></MeetUs>
    <NowHiring id="jobs"></NowHiring>
    <ImageGallerySlider id="image-gallery"></ImageGallerySlider>
    <!-- <GoogleMaps id="google-maps"></GoogleMaps> -->
    <Footer id="footer"></Footer>
  </main>
</template>

<script>
import MainSlider from "@/components/MainSlider";
import Services from "@/components/services/Services";
import NowHiring from "@/components/openings/NowHiring";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
// import GoogleMaps from "@/components/GoogleMaps";
import ImageGallerySlider from "@/components/ImageGallerySlider";
import MeetUs from "@/components/meet-us/MeetUs";

export default {
  name: "home",
  components: {
    MainSlider,
    Services,
    CallToAction,
    Footer,
    // GoogleMaps,
    ImageGallerySlider,
    MeetUs,
    NowHiring
  },
  methods: {
    updatePanelist(ev) {
      this.currentPanelist = ev.target.value;
    }
  },
  data() {
    return {
      panelists: ["Evan You", "Chris Fritz"],
      currentPanelist: "Evan You"
    };
  }
};
</script>
