import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import Test from "@/views/Test.vue";
import ArticlesList from "@/views/ArticlesList.vue";

export const router = createRouter({
    routes: [
        {
            path: "/",
            component: HomePage,
        },
        {
            path: "/test",
            component: Test,
        },
        {
            path: "/titles/:key",
            name: "titles",
            props: true,
            component: ArticlesList,
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/",
        },
    ],
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});
