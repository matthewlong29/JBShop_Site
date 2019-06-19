<template>
  <main id="home">
    <MainSlider id="main-slider"></MainSlider>
    <Services id="about"></Services>
    <CallToAction id="call-to-action"></CallToAction>
    <MeetUs id="team"></MeetUs>
    <NowHiring id="jobs"></NowHiring>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name:
          <input type="text" name="name">
        </label>
      </p>
      <p>
        <label>
          Your Email:
          <input type="email" name="email">
        </label>
      </p>
      <p>
        <label>
          Your Role:
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
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
  }
};
</script>
