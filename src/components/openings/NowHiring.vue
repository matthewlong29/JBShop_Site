<template>
  <section id="jobs">
    <div class="title-container">
      <TitleAndSubtitle
        title="Join Our Team!"
        subtitle="If you think you'd be a good fit, or see an open position below that you're interested in, fill out an application and call now to schedule an interview!"
      ></TitleAndSubtitle>
      <Button link="http://www.google.com" icon="file-download" topText="Download" bottomText="Application"></Button>
    </div>
  </section>
</template>

<script>
import TitleAndSubtitle from "@/components/partials/TitleAndSubtitle";
import Button from "@/components/partials/Button";

export default {
  name: "NowHiring",
  components: { TitleAndSubtitle, Button }
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
</style>
