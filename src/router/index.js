import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/ListView.vue";
import EditView from "@/views/EditView.vue";
import CreateView from "@/views/CreateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/create",
      name: "create",
      component: CreateView,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditView,
    },
  ],
});

export default router;
