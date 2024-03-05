import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/products.vue"),
    },
    {
      path: '/update/:id',
      name: 'update',
      component: () => import('../components/update.vue')
    } 
  ],
});

export default router;
