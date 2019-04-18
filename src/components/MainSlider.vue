<template>
  <section :style="{backgroundImage: `url(${images[counter]})`}">
    <div class="progress-slider" v-bind:style="{width: progressPercentage + '%'}"></div>
    <div class="slider-content-container">
      <button v-on:click="decrementCounter()">
        <font-awesome-icon icon="arrow-left"/>
      </button>
      <div class="messages-container">
        <h1>{{ messages[counter][0] }}</h1>
        <h2>{{ messages[counter][1] }}</h2>
      </div>
      <button v-on:click="incrementCounter()">
        <font-awesome-icon icon="arrow-right"/>
      </button>
    </div>
  </section>
</template>

<script>
import { setInterval, setTimeout } from "timers";
export default {
  name: "MainSlider",
  data() {
    return {
      originalTime: 20,
      timeLeft: 20,
      timer: setInterval(this.countdown, 1000),
      progressPercentage: 100,
      messages: [
        ["The best car repair service in your area!", "Since 1970?"],
        ["Something else about car repair!", "We repair with love."],
        ["Walk-ins always welcome!", "Or call now at (502) 695-4477"]
      ],
      images: [
        "/images/banner.jpg",
        "/images/meetUsHeader.jpg",
        "/images/services.jpg"
      ],
      counter: 0
    };
  },
  methods: {
    /***** countdown
     * TODO only execute countdown if it is inside the view
     */
    countdown() {
      if (this.timeLeft == -1) {
        clearTimeout(this.timer);
      } else {
        this.timeLeft--;
        this.calculateProgressPercentage();
      }
    },
    /***** calculateProgressPercentage
     * TODO: get setTimeout to work propperly such that once reset it waits before countign down again
     * TODO: reset progress to 100 whenever clicking decrement or increment counter button
     */
    calculateProgressPercentage() {
      this.progressPercentage = (this.timeLeft / this.originalTime) * 100;
      console.log(this.progressPercentage);
      // reset progress and restart countdown
      if (this.progressPercentage <= 0) {
        setTimeout(this.resetProgressPercentage(), 5000);
      }
    },
    /***** resetProgressPercentage
     */
    resetProgressPercentage() {
      this.progressPercentage = 100;
      this.timeLeft = this.originalTime;
      this.incrementCounter();
    },
    /***** decrementCounter
     */
    decrementCounter() {
      if (this.counter === 0) {
        console.log("counter is " + this.counter);
        this.counter = 2;
      } else {
        console.log("counter is " + this.counter);
        this.counter--;
      }
    },
    /***** incrementCounter
     */
    incrementCounter() {
      if (this.counter === 2) {
        console.log("counter is " + this.counter);
        this.counter = 0;
      } else {
        console.log("counter is " + this.counter);
        this.counter++;
      }
    }
  },
  beforeMount() {
    setTimeout(this.countdown, 1000);
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
@import "../styles/scss/placeholders";

section {
  height: 400px;
  background-size: cover;
  background-position: center;
  border-bottom: 4px solid $red;
  transition: background-image 0.25s ease-in-out;
  .slider-content-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .messages-container {
      // TODO add transitions for messages
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      h1 {
        background: transparentize($color: $blue, $amount: 0.25);
        padding: 1rem;
        color: $white;
        margin: 0;
        margin-bottom: 10px;
      }
      h2 {
        background: transparentize($color: $red, $amount: 0.25);
        padding: 0.5rem;
        color: $white;
        margin: 0;
      }
    }
    button {
      display: flex;
      justify-content: center;
      height: 120px;
      width: 30px;
      background-color: transparentize($color: $gray, $amount: 0.25);
      border: none;
      svg {
        width: 20px;
        height: auto;
        color: $white;
      }
      &:hover {
        background-color: transparentize($color: $gray, $amount: 0.05);
      }
    }
  }
  .progress-slider {
    background-color: transparentize($color: $blue, $amount: 0.25);
    height: 4px;
    margin: 0;
    transition: width 1.2s;
  }
}
</style>
