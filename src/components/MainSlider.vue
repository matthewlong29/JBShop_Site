<template>
  <div>
    <div class="progress-slider" v-bind:style="{width: progressPercentage + '%'}"></div>
    <section>
      <h1>{{ message }}</h1>
    </section>
  </div>
</template>

<script>
import { setInterval } from "timers";
export default {
  name: "MainSlider",
  data() {
    return {
      originalTime: 20,
      timeLeft: 20,
      timer: setInterval(this.countdown, 1000),
      progressPercentage: 100,
      message: "The best car repair service in your area!"
    };
  },
  methods: {
    countdown() {
      if (this.timeLeft == -1) {
        clearTimeout(this.timer);
      } else {
        this.timeLeft--;
        this.calculateProgressPercentage();
      }
    },
    calculateProgressPercentage() {
      this.progressPercentage = (this.timeLeft / this.originalTime) * 100;
      console.log(this.progressPercentage);
      // reset progress and restart countdown
      if (this.progressPercentage <= 0) {
        this.progressPercentage = 100;
        this.timeLeft = this.originalTime;
      }
    }
  },
  beforeMount() {
    this.countdown();
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
@import "../styles/scss/placeholders";
div {
  .progress-slider {
    background-color: transparentize($color: $blue, $amount: 0.5);
    height: 4px;
    margin: 0;
  }
  section {
    min-height: 50px;
    @extend %container;
  }
}
</style>
