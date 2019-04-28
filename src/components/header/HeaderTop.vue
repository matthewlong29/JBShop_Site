<template>
  <div class="header-top">
    <router-link to="/">
      <img
        src="http://expressrepairservice.com/Content/img/express-service-logo.png"
        alt="JB Long and Son Body Shop Logo"
      >
    </router-link>
    <div>
      <div class="phone">
        <font-awesome-icon icon="phone"/>
        <div>
          <span class="message">Call Us Now</span>
          <span>(502) 695-4477</span>
        </div>
      </div>
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
.header-top {
  @extend %container;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  padding: 1rem;
  background-color: $white;
  img {
    height: 50px;
  }
  div {
    display: flex;
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
</style>
