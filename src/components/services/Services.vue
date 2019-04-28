<template>
  <section>
    <TitleAndSubtitle title="Why choose us?" subtitle="Family owned and operated since 1855."></TitleAndSubtitle>
    <div class="tiles-container">
      <ServiceTile
        title="General Collision Repair"
        subtitle="subtitle"
        description="If you've been involved in an accident we're the shop for you."
        image="/images/stock/1.jpg"
        imageAlignment="left"
      ></ServiceTile>
      <ServiceTile
        title="Body Work"
        subtitle="subtitle"
        description="We have four body men who aren't afraid of anything. They can repair or replace any part necessary."
        image="/images/stock/2.jpg"
        imageAlignment="right"
      ></ServiceTile>
      <ServiceTile
        title="Paint"
        subtitle="subtitle"
        description="We have four skilled painters. All of which stay very busy."
        image="/images/stock/3.jpg"
        imageAlignment="left"
      ></ServiceTile>
      <ServiceTile
        title="Free Estimates"
        subtitle="subtitle"
        description="Need an estimate, but not sure if you're going to get the car repaired? Come on by! They're free!"
        image="/images/stock/4.jpg"
        imageAlignment="right"
      ></ServiceTile>
      <ServiceTile
        title="Quality Control"
        subtitle="subtitle"
        description="We have a fully operational wash bay and full time quality control employees."
        image="/images/stock/5.jpg"
        imageAlignment="left"
      ></ServiceTile>
      <ServiceTile
        title="We accept cash, check, and credit"
        subtitle="subtitle"
        description="In addition to cash and check, we accept credit (Visa and MasterCard)."
        image="/images/stock/6.jpg"
        imageAlignment="right"
      ></ServiceTile>
    </div>
  </section>
</template>

<script>
import ServiceTile from "@/components/services/ServiceTile";
import TitleAndSubtitle from "@/components/partials/TitleAndSubtitle";

export default {
  name: "Services",
  components: {
    ServiceTile,
    TitleAndSubtitle
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";
@import "../../styles/scss/placeholders";

section {
  @extend %container;
  margin: 5rem auto;
  .tiles-container {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 200px;
  }
}
</style>
