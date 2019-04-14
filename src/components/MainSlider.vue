<template>
  <section>
    <h1>{{ message }}</h1>
  </section>
</template>

<script>
import { setInterval } from "timers";
export default {
  name: "MainSlider",
  data() {
    return {
      timeLeft: 15,
      timer: setInterval(this.countdown, 1000),
      message: ""
    };
  },
  methods: {
    countdown() {
      if (this.timeLeft == -1) {
        clearTimeout(this.timer);
      } else {
        this.timeLeft--;
        console.log(`time left: ${this.timeLeft}`);
      }
    }
  },
  beforeMount() {
    this.countdown();
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 50px;
}
</style>
