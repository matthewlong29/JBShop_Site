import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";
// import { googleMapsAPIKey } from "./config.js";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    // key: googleMapsAPIKey,
    libraries: "places" // necessary for places input
  }
});

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
  faClipboard,
  faCheckCircle,
  faPlus,
  faMinus,
  faMapMarkerAlt,
  faUserPlus,
  faUserMinus,
  faFileDownload,
  faWrench
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
  faClipboard,
  faCheckCircle,
  faPlus,
  faMinus,
  faMapMarkerAlt,
  faUserPlus,
  faUserMinus,
  faFileDownload,
  faWrench
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
