<template>
  <section>
    <h1>Oops, looks like something went wrong!</h1>
    <p>If the problem persists, please give us a call.</p>
    <Button link="/apply" topText="Back to Application" bottomText="Apply now!" icon="inbox"/>
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
  padding: 1.5rem 1rem;
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
    margin-bottom: 1.5rem;
  }
}
</style>
