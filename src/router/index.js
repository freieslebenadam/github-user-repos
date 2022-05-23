import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RepoDetailView from "../views/RepoDetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/repo/:id",
    name: "repo",
    component: RepoDetailView,
  },
  // TODO: NotFoundPage
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
