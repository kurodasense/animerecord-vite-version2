import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/main",
      name: "main",
      redirect: "/main/home",
      children: [
        { path: "home", component: () => import("@/views/home") },
        { path: "directory", component: () => import("@/views/directory") }
      ]
    }
  ]
});

export default router;
