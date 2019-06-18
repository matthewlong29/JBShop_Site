<template>
  <section>
    <form name="application" netlify>
      <p>
        <label>
          Your First Name
          <input type="text" name="first-name">
        </label>
      </p>
      <p>
        <label>
          Your Last Name
          <input type="text" name="last-name">
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
@import "../styles/scss/placeholders";

section {
  @extend %container;
}
</style>