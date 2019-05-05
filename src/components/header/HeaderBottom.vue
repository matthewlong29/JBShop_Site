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

* {
  transition: all ease-in-out 0.25s;
}

nav {
  width: 100%;
  position: fixed;
  top: 82px;
  height: calc(18px + 2rem);
  background-color: $blue;
  ul {
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

@media (max-width: 426px) {
  nav {
    font-size: 14px;
    ul {
      a {
        li {
          padding: 0 18px;
        }
      }
    }
  }
}

@media (max-width: 375px) {
  nav {
    font-size: 12px;
    ul {
      a {
        li {
          padding: 0 16px;
        }
      }
    }
  }
}

@media (max-width: 323px) {
  nav {
    font-size: 12px;
    ul {
      a {
        li {
          padding: 0 14px;
        }
      }
    }
  }
}
</style>
