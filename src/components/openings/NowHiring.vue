<template>
  <section id="jobs">
    <div class="title-container">
      <TitleAndSubtitle
        title="Join Our Team!"
        subtitle="If you think you'd be a good fit, or see an open position below that you're interested in, fill out an application and call now to schedule an interview!"
      ></TitleAndSubtitle>
      <router-link to="/apply">
        <Button icon="inbox" topText="Apply" bottomText="Today!"></Button>
      </router-link>
    </div>
    <Opening
      icon="spray-can"
      jobTitle="Automotive Painter"
      areaOfWork="Paint"
      datePosted="06/18/19"
      jobDescription="We have an immediate opening for an automotive painter. You will be responsible for operating painting equipment (e.g. paint gun, sanders, and buffers). Give us a call today if you think you have what it takes! To apply now, fill out the application above."
    ></Opening>
  </section>
</template>

<script>
import TitleAndSubtitle from "@/components/partials/TitleAndSubtitle";
import Button from "@/components/partials/Button";
import Opening from "@/components/openings/Opening";

export default {
  name: "NowHiring",
  components: { TitleAndSubtitle, Button, Opening }
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";
@import "../../styles/scss/placeholders";

section {
  @extend %container;
  margin-bottom: 5rem;
  margin-top: 5rem;
  .title-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
      max-width: 80%;
    }
  }
}

a {
  text-decoration: none;
}
</style>
