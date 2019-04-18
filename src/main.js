import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faClock,
  faArrowLeft,
  faArrowRight,
  faCar,
  faAward,
  faCarSide,
  faTools,
  faTruckPickup,
  faMagic,
  faClipboard
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faPhone,
  faClock,
  faArrowLeft,
  faArrowRight,
  faCar,
  faAward,
  faCarSide,
  faTools,
  faTruckPickup,
  faMagic,
  faClipboard
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
