<template>
  <section>
    <h1>Thanks for your submitting an application!</h1>
    <p>We will review your application and reach out soon.</p>
    <Button link="/" topText="Return home" bottomText="Thanks again!" icon="smile-beam"/>
  </section>
</template>

<script>
import Button from "@/components/atoms/Button";

export default {
  name: "SubmissionFail",
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
@import "../styles/scss/placeholders";

section {
  @extend %container;
  padding: 1.5rem 0;
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
    margin-bottom: 1.5rem;
  }
}
</style>
