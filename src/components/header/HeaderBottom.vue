<template>
  <nav>
    <ul>
      <router-link to="#home">
        <li>Home</li>
      </router-link>
      <router-link to="#about">
        <li>About</li>
      </router-link>
      <router-link to="#team">
        <li>Our Team</li>
      </router-link>
      <router-link to="#jobs">
        <li>Jobs</li>
      </router-link>
      <router-link to="#contact">
        <li>Contact</li>
      </router-link>
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
      transition: background-color 0.2s;
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
