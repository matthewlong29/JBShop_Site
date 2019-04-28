<template>
  <section>
    <TitleAndSubtitle
      title="Lets Get In Touch!"
      subtitle="The best way to contact us is by phone. You're also always welcome to simply drop by; so don't hesitate in doing so."
    ></TitleAndSubtitle>
    <div class="contact-information">
      <div class="address">
        <font-awesome-icon icon="map-marker-alt"/>
        <p>107 Collision Center Dr.</p>
        <p>Frankfort, KY 40601</p>
      </div>
      <div class="hours-of-operation">
        <font-awesome-icon icon="clock"/>
        <p>Sun. Closed</p>
        <p>Mon. 8:00 am - 5:00 pm</p>
        <p>Tues. 8:00 am - 5:00 pm</p>
        <p>Wed. 8:00 am - 5:00 pm</p>
        <p>Thurs. 8:00 am - 5:00 pm</p>
        <p>Fri. 8:00 am - 5:00 pm</p>
        <p>Sat. Closed</p>
      </div>
      <div class="phone">
        <font-awesome-icon icon="phone"/>
        <p>(502) 695-4477</p>
        <p>(502) 695-2041</p>
      </div>
    </div>
  </section>
</template>

<script>
import TitleAndSubtitle from "@/components/partials/TitleAndSubtitle";

export default {
  name: "Contact",
  components: { TitleAndSubtitle }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
@import "../styles/scss/placeholders";

section {
  @extend %container;
  .contact-information {
    padding: 2rem 0;
    display: flex;
    justify-content: space-around;
    .address,
    .hours-of-operation,
    .phone {
      text-align: center;
      svg {
        color: $red;
        height: 25px;
        width: auto;
      }
      p {
        margin: 0;
      }
    }
  }
}
</style>
