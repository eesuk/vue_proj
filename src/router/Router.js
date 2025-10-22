import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ArticlesList from "@/views/ArticlesList.vue";
import ArticlePage from "@/views/ArticlePage.vue";

export const router = createRouter({
    routes: [
        {
            path: "/",
            component: HomePage,
        },
        {
            path: "/titles/:key",
            name: "titles",
            props: true,
            component: ArticlesList,
        },
        {
            path: "/article/:title",
            name: "article",
            props: true,
            component: ArticlePage,
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
