<script setup>
import Header from './components/ui/Header.vue';
import MainArticlesList from './components/ui/MainArticlesList.vue';
import Footer from './components/ui/Footer.vue';

import { useArticleStore } from '@/stores/articleStores';

const articlesStore = useArticleStore()
const newArticles = articlesStore.getByKey('NEW');

</script>

<template>
    <Header></Header>
    <main>
        <MainArticlesList title="Последние новости" :articles="newArticles" type="default"></MainArticlesList>
    </main>
    <Footer></Footer>
</template>

<style scoped>
main{
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
}

</style>
