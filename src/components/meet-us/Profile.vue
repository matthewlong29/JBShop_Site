<template>
  <div class="profile-card" v-bind:class="{ flip: viewDescription }">
    <div class="front">
      <div class="profile-background" v-lazy:background-image="bgImage">
        <div class="profile-overlay">
          <img :alt="'Image of ' + name" v-lazy="profileImage">
        </div>
      </div>
      <div class="titles">
        <h2>{{name}}</h2>
        <h3>{{jobTitle}}</h3>
      </div>
      <button v-on:click="toggleDescription()">
        <font-awesome-icon v-if="!viewDescription" icon="user-plus"/>
        <font-awesome-icon v-if="viewDescription" icon="user-minus"/>
      </button>
    </div>
    <div class="back" v-lazy:background-image="bgImage">
      <p>{{message}}</p>
      <button v-on:click="toggleDescription()">
        <font-awesome-icon v-if="!viewDescription" icon="user-plus"/>
        <font-awesome-icon v-if="viewDescription" icon="user-minus"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: ["profileImage", "bgImage", "name", "jobTitle", "message"],
  data() {
    return {
      viewDescription: false
    };
  },
  methods: {
    toggleDescription() {
      this.viewDescription = !this.viewDescription;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables";
@import "../../styles/scss/placeholders";

%button {
  @include createBackground(
    darken($color: $red, $amount: 6),
    darken($color: $red, $amount: 6),
    "/images/textures/concrete-dark.jpg"
  );
  display: block;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  border: 1px solid transparentize($color: $black, $amount: 0.95);
  border-radius: 0 0 8px 8px;
  padding: 10px;
  width: 100%;
  box-shadow: 0 0 1px transparentize($color: $black, $amount: 0.85);
  cursor: pointer;
  svg {
    height: 20px;
    width: auto;
  }
  &:hover {
    box-shadow: 0 0 4px transparentize($color: $black, $amount: 0.75);
  }
}

* {
  transition: 0.35s ease-in-out;
}

.profile-card {
  flex: 1 1 330px;
  transform: rotateY(0deg);
  perspective: 1500px;
  height: 300px;
  position: relative;
  transition: box-shadow ease-in-out 0.25s;
  .front,
  .back {
    border-radius: 8px;
    box-shadow: 0 0 2px transparentize($color: $black, $amount: 0.05);
    height: 100%;
    width: 100%;
    position: absolute;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    button {
      @extend %button;
    }
    &:hover {
      box-shadow: 0 0 8px transparentize($color: $black, $amount: 0.15);
    }
  }
  .front {
    transform: rotateY(0deg);
    @include createBackground(
      darken($color: $red, $amount: 2),
      darken($color: $red, $amount: 2),
      "/images/textures/concrete-dark.jpg"
    );
    .profile-background {
      border-radius: 8px 8px 0 0;
      height: calc(50% - 40px);
      width: 100%;
      background-size: cover;
      background-position: center;
      .profile-overlay {
        border-radius: 8px 8px 0 0;
        display: flex;
        justify-content: center;
        background-color: transparentize($color: $black, $amount: 0.55);
        height: 100%;
        width: 100%;
        img {
          border: 2px solid $white;
          border-radius: 50%;
          height: 140px;
          width: 140px;
          margin-top: 20px;
          box-shadow: 0 0 0 3px transparentize($color: $white, $amount: 0.75),
            0 4px 5px transparentize($color: $red, $amount: 0.65),
            0 0 25px 25px transparentize($color: $white, $amount: 0.8);
        }
      }
    }
    .titles {
      text-align: center;
      margin-top: 39px;
      padding: 20px;
      h2,
      h3 {
        margin: 0;
      }
      h2 {
        font-size: 1.25rem;
        color: $white;
        font-weight: normal;
        letter-spacing: 1px;
      }
      h3 {
        color: darken($color: $red, $amount: 45);
        letter-spacing: -1px;
      }
      &:before {
        content: "";
        display: block;
        height: 1px;
        width: 80%;
        background-color: transparentize($color: $white, $amount: 0.65);
        margin: 10px auto;
      }
    }
  }
  .back {
    transform: rotateY(180deg);
    background-position: center;
    background-size: cover;
    p {
      color: $white;
      height: calc(100% - 60px);
      background-color: transparentize($color: $black, $amount: 0.55);
      margin: 0px;
      padding: 30px;
      border-radius: 8px;
    }
  }
  &.flip .front {
    transform: rotateY(180deg);
  }
  &.flip .back {
    transform: rotateY(360deg);
  }
}
</style>
