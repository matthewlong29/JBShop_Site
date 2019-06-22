<template>
  <section>
    <TitleAndSubtitle title="Why choose us?" subtitle="We are a preferred collision repair shop by most insurance carriers. Also, we are family owned and operated since 1984."></TitleAndSubtitle>
    <div class="tiles-container">
      <ServiceTile
        title="General Collision Repair"
        subtitle="Repair"
        description="If you've been involved in an accident we're the shop for you."
        image="/images/services/collision-repair.jpg"
        imageAlignment="left"
      ></ServiceTile>
      <ServiceTile
        title="Body Work"
        subtitle="Heavy and Light"
        description="We have four body men who aren't afraid of anything. They can repair or replace any part necessary."
        image="/images/services/body-work.jpg"
        imageAlignment="right"
      ></ServiceTile>
      <ServiceTile
        title="Paint"
        subtitle="Any size paint job!"
        description="We have three skilled painters. All of which stay very busy."
        image="/images/services/paint.jpg"
        imageAlignment="left"
      ></ServiceTile>
      <ServiceTile
        title="Free Estimates"
        subtitle="Free!"
        description="Need an estimate, but not sure if you're going to get the car repaired? Come on by! They're free!"
        image="/images/services/free-estimates.jpg"
        imageAlignment="right"
      ></ServiceTile>
      <ServiceTile
        title="Quality Control"
        subtitle="Inspection"
        description="We have a fully operational wash bay and full time quality control employees."
        image="/images/services/quality-control.jpg"
        imageAlignment="left"
      ></ServiceTile>
      <ServiceTile
        title="We accept cash, check, and credit"
        subtitle="Payment"
        description="In addition to cash and check, we accept credit (Visa and MasterCard)."
        image="/images/services/payment.jpg"
        imageAlignment="right"
      ></ServiceTile>
    </div>
  </section>
</template>

<script>
import ServiceTile from "@/components/molecules/ServiceTile";
import TitleAndSubtitle from "@/components/atoms/TitleAndSubtitle";

export default {
  name: "Services",
  components: {
    ServiceTile,
    TitleAndSubtitle
  }
};
</script>

<style lang="scss" scoped>
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
