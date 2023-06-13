import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@views/HomeView.vue";
import AboutView from "@views/AboutView.vue";
import ResumenView from "@views/ResumenView.vue";
import PortfolioView from "@views/PortfolioView.vue";
import ContactView from "@views/ContactView.vue";

const DEFAULT_TITLE = 'Alucard';

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: DEFAULT_TITLE + " - Home",
    }
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
    meta: {
      title: DEFAULT_TITLE + " - About",
    }
  },
  {
    path: "/resumen",
    name: "Resumen",
    component: ResumenView,
    meta: {
      title: DEFAULT_TITLE + " - Resumen",
    }
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: PortfolioView,
    meta: {
      title: DEFAULT_TITLE + " - Portfolio",
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
    meta: {
      title: DEFAULT_TITLE + " - Contact",
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE;
  //next();
})

export default router;