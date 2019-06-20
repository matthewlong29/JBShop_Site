<template>
  <form
    name="contact"
    action="/"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact">
    <label for="name">Name</label>
    <input type="text" name="name" id="name">
    <label for="email">Email</label>
    <input type="text" name="email" id="email">
    <input type="submit" value="Send Message" class>
  </form>
</template>

<script>
export default {
  name: "Apply"
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
@import "../styles/scss/placeholders";

* {
  @extend %container;
}

form {
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
  }
}
</style>
