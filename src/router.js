import { createRouter, createWebHistory } from "vue-router";
import TopPageVue from "./pages/TopPage.vue";
import CreateAccountVue from "./pages/CreateAccount.vue";
import HomeVue from "./pages/Home.vue";
import QuizVue from "./pages/Quiz.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TopPageVue, name: "topPage" },
    { path: "/toSignup", component: CreateAccountVue, name: "toSignUp" },
    { path: "/courses", component: HomeVue, name: "courses" },
    {
      path: "/courses/:courseId",
      component: QuizVue,
      name: "courseDetail",
    },
  ],
});

export default router;
