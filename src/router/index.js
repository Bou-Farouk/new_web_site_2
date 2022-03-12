import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AbouPage from "../views/AboutPage.vue";
import ActuPage from "../views/ActuPage.vue";
import LoginPage from "../views/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: HomePage,
  },
  {
    path: "/Apropos",
    name: "Apropos",
    component: AbouPage,
  },
  {
    path: "/Actu",
    name: "Actu",
    component: ActuPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
