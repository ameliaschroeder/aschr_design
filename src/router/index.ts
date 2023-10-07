import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/WorkView.vue";
import AboutView from "@/views/AboutView.vue";
import SatchView from "@/views/SatchView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomeV",
    component: HomeView,
  },
  {
    path: "/about",
    name: "AboutV",
    component: AboutView,
  },
  {
    path: "/satch",
    name: "SatchV",
    component: SatchView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
