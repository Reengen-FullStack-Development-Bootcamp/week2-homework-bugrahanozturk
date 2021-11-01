import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HotelPage from "@/pages/HotelPage";
import ReservationPage from "@/pages/ReservationPage";
import Home from "@/pages/Home";
import Vuelidate from "vuelidate";
import Payments from "@/components/Payments";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueRouter);

const routes = [
  { path: "/hotel/:id", component: HotelPage },
  { path: "/reservation", component: ReservationPage },
  { path: "/", component: Home },
  { path: "/payments", component: Payments },
];

const router = new VueRouter({
  mode: "history",
  routes, // short for `routes: routes`
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
