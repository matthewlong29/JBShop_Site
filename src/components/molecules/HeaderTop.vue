<template>
  <div class="header-top">
    <router-link to="/">
      <h1>JB Long and Son Body Shop</h1>
    </router-link>
    <div>
      <a href="tel:5026954477">
        <div class="phone">
          <font-awesome-icon icon="phone"/>
          <div>
            <span class="message">Call Us Now</span>
            <span>(502) 695-4477</span>
          </div>
        </div>
      </a>
      <div class="hours-of-operation">
        <font-awesome-icon icon="clock"/>
        <div>
          <span class="message">Hours of Operations</span>
          <span>Mon - Fri 8:00am - 5:00pm</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTop"
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";
@import "../../styles/scss/placeholders";

* {
  transition: all ease-in-out 0.25s;
}

.header-top {
  @include userSelect(none);
  @extend %container;
  display: flex;
  justify-content: space-between;
  position: fixed;
  flex-wrap: wrap;
  top: 0;
  padding: 1rem;
  background-color: $white;
  height: 50px;
  width: calc(100% - 2rem);
  box-shadow: 0 0 8px 5px transparentize($color: $black, $amount: 0.875);
  z-index: 3;
  a {
    text-decoration: none;
    color: $black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
  }
  div {
    display: flex;
    flex-wrap: wrap;
    .phone,
    .hours-of-operation {
      display: flex;
      align-items: center;
      padding: 0 1rem;
      svg {
        padding-right: 1rem;
        width: 25px;
        height: auto;
      }
      div {
        display: flex;
        flex-direction: column;
        text-align: left;
        span.message {
          font-weight: bold;
        }
      }
    }
    .phone {
      border-right: 2px solid $red;
    }
  }
}

@media (max-width: 800px) {
  .header-top {
    a {
      h1 {
        font-size: 1rem;
      }
    }
    div {
      .phone,
      .hours-of-operation {
        font-size: 0.75rem;
        padding: 0 0.5rem;
        svg {
          width: 15px;
          height: auto;
        }
      }
    }
  }
}

@media (max-width: 580px) {
  .header-top {
    justify-content: center;
  }
}

@media (max-width: 320px) {
  .header-top {
    div {
      .phone,
      .hours-of-operation {
        svg {
          padding-right: 0.5rem;
        }
      }
    }
  }
}

@media (max-width: 303px) {
  .header-top {
    padding: 1rem 0.5rem;
    width: calc(100% - 1rem);
  }
}
</style>
