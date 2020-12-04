import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw, useRoute } from "vue-router";
import Home from "../views/Home.vue";

const dynamicPropsFn = (props: any, more: any) => {
  console.log("props", props);
  console.log("more", more);
  const now = new Date();
  const route = useRoute();
  debugger;
  return {
    name: now.getFullYear() + " " + parseInt(route?.params?.id as string),
  };
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:id",
    props: (v: any )=> dynamicPropsFn(v, null),
    component: () => import("../views/ViewUser.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
