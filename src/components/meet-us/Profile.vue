<template>
  <div class="member-profile">
    <div class="member-image" :style="{backgroundImage: `url(${image})`}">
      <div class="overlay" :style="{visibility: visibleStatus, opacity: opacityStatus}">
        <p>{{message}}</p>
      </div>
      <div class="overlay-button" v-on:click="toggleVisibility()">
        <font-awesome-icon v-if="visibleStatus === 'hidden'" icon="plus"/>
        <font-awesome-icon v-if="visibleStatus === 'visible'" icon="minus"/>
      </div>
    </div>
    <div class="name-and-title">
      <h2>{{name}}</h2>
      <h3>{{jobTitle}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: ["image", "name", "jobTitle", "message"],
  data() {
    return {
      visibleStatus: "hidden",
      opacityStatus: 0
    };
  },
  methods: {
    toggleVisibility() {
      if (this.visibleStatus === "hidden") {
        this.visibleStatus = "visible";
        this.opacityStatus = 1;
      } else {
        this.visibleStatus = "hidden";
        this.opacityStatus = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";
@import "../../styles/scss/placeholders";

.member-profile {
  border: 1px solid lighten($color: $gray, $amount: 35);
  border-radius: 2px;
  flex: 1 1 300px;
  .name-and-title {
    padding: 0.5rem;
    h2,
    h3 {
      margin: 0;
    }
    h3 {
      font-weight: normal;
    }
  }
  .member-image {
    height: 300px;
    background-size: cover;
    background-position: center;
    position: relative;
    border-bottom: 2px solid $red;
    .overlay {
      width: calc(100% - 1rem);
      height: calc(100% - 1rem);
      background-color: transparentize($color: $red, $amount: 0.25);
      transition: opacity ease-in-out 0.25s;
      color: white;
      overflow-y: scroll;
      padding: 0.5rem;
    }
    .overlay-button {
      display: flex;
      justify-content: center;
      align-items: center;
      color: $white;
      position: absolute;
      bottom: 0;
      right: 0;
      height: 40px;
      width: 40px;
      background-color: $red;
      cursor: pointer;
      p {
        visibility: hidden;
      }
      &:hover {
        p {
          visibility: visible;
        }
      }
    }
  }
}
</style>
