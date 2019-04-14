<template>
  <nav>
    <ul>
      <a href="/">
        <li>Home</li>
      </a>
      <a href>
        <li>About</li>
      </a>
      <a href>
        <li>Services</li>
      </a>
      <a href>
        <li>Our Team</li>
      </a>
      <a href>
        <li>Jobs</li>
      </a>
      <a href>
        <li>Contact</li>
      </a>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderBottom"
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";
@import "../../styles/scss/placeholders";
nav {
  width: 100%;
  position: fixed;
  top: 82px;
  height: calc(18px + 2rem);
  background-color: $blue;
  ul {
    @extend %container;
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 auto;
    a {
      text-decoration: none;
      color: $white;
      font-weight: bold;
      &:hover {
        background-color: $red;
      }
      li {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 50px;
        padding: 0 20px;
        text-align: center;
      }
    }
  }
}
</style>
