import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/dashboard"),
    children: [
      {
        path: "",
        component: () => import("@/views/order/orderlnfo")
      },
      {
        path: "/homepage/adv/pc",
        component: () => import("@/views/homepage/adv/pc")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
