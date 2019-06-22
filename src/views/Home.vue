<template>
  <div id="home">
    <MainSlider id="main-slider"/>
    <Services id="about"/>
    <CallToAction id="call-to-action"/>
    <MeetUs id="team"/>
    <NowHiring id="jobs"/>
    <ImageGallerySlider id="image-gallery"/>
    <GoogleMaps id="google-maps"/>
  </div>
</template>

<script>
import MainSlider from "@/components/organisms/MainSlider";
import Services from "@/components/organisms/Services";
import NowHiring from "@/components/organisms/NowHiring";
import CallToAction from "@/components/organisms/CallToAction";
import GoogleMaps from "@/components/organisms/GoogleMaps";
import ImageGallerySlider from "@/components/organisms/ImageGallerySlider";
import MeetUs from "@/components/organisms/MeetUs";

export default {
  name: "home",
  components: {
    MainSlider,
    Services,
    CallToAction,
    GoogleMaps,
    ImageGallerySlider,
    MeetUs,
    NowHiring
  }
};
</script>
