import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Apply from "./views/Apply.vue";
import SubmissionFail from "./views/SubmissionFail.vue";
import SubmissionSuccess from "./views/SubmissionSuccess.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/apply",
      name: "apply",
      component: Apply
    },
    {
      path: "/thanks",
      name: "success",
      component: SubmissionSuccess
    },
    {
      path: "/404",
      name: "fail",
      component: SubmissionFail
    }
  ]
});
