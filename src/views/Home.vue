<template>
  <main id="home">
    <MainSlider id="main-slider"></MainSlider>
    <Services id="about"></Services>
    <CallToAction id="call-to-action"></CallToAction>
    <MeetUs id="team"></MeetUs>
    <NowHiring id="jobs"></NowHiring>
    <form name="ask-question" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="ask-question">
      <label v-for="(panelist, index) in panelists" :key="index">
        <input
          type="radio"
          name="panelist"
          :value="panelist"
          @input="ev => updatePanelist"
          :checked="panelist === currentPanelist"
        >
        <span>{{ panelist }}</span>
      </label>
      ...
      <button>Submit</button>
    </form>
    <ImageGallerySlider id="image-gallery"></ImageGallerySlider>
    <Contact id="contact"></Contact>
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
import Contact from "@/components/Contact";

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
    Contact,
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
