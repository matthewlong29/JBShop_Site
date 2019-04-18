<template>
  <section>
    <div class="why-choose-us">
      <div>
        <h2>Why choose us?</h2>
        <h3>Family owned and operated since 1855.</h3>
      </div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
    </div>
    <div class="tile-container">
      <ServiceTile title="im the first title" subtitle="im the first subtitle" icon="car"></ServiceTile>
      <ServiceTile title="im the second title" subtitle="im the second subtitle" icon="car-side"></ServiceTile>
      <ServiceTile title="im the third title" subtitle="im the third subtitle" icon="magic"></ServiceTile>
    </div>
    <div class="tile-container">
      <ServiceTile title="im the fourth title" subtitle="im the fourth subtitle" icon="tools"></ServiceTile>
      <ServiceTile title="im the fifth title" subtitle="im the fifth subtitle" icon="truck-pickup"></ServiceTile>
      <ServiceTile title="im the sixth title" subtitle="im the sixth subtitle" icon="clipboard"></ServiceTile>
    </div>
  </section>
</template>

<script>
import ServiceTile from "@/components/services/ServiceTile";

export default {
  name: "Services",
  components: {
    ServiceTile
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";
@import "../../styles/scss/placeholders";

section {
  @extend %container;
  display: flex;
  justify-content: space-between;
  margin: 5rem auto;
  .why-choose-us {
    div {
      border-left: 4px solid $red;
      padding-left: 0.5rem;
      h2, h3 {
        margin: 0;
      }
      h2 {
        font-weight: bold;
      }
      h3 {
        font-weight: lighter;
        color: lighten($color: $black, $amount: 25);
      }
    }
    p {
      color: lighten($color: $black, $amount: 30);
    }
  }
  .tile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
