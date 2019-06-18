import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Apply from "./views/Apply.vue";

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
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from);
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 172 }
      };
    }
  }
});
