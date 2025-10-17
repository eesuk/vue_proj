<script setup>
import Header from '@/components/ui/Header.vue';
import MainArticlesList from '@/components/ui/MainArticlesList.vue';
import Footer from '@/components/ui/Footer.vue';

import { useArticleStore } from '@/stores/articleStores';

const articlesStore = useArticleStore()
const newArticles = articlesStore.getByKeyToMain('NEW');
const societyArticles = articlesStore.getByKeyToMain('общество');
const scinceArticles = articlesStore.getByKeyToMain('наука');
const cultureArticles = articlesStore.getByKeyToMain('культура');

const keywordsList = ['NEW', 'общество', 'наука', 'культура', 'экономика', 'спорт', 'россия']

</script>

<template>
    <Header></Header>
    <main>
        <MainArticlesList v-for="(keyword, key) in keywordsList"
        :title="(key == 0 ? 'Последний новости' : keyword)"
        :articles="articlesStore.getByKeyToMain(keywordsList[key])" 
        :type="(key == 0 ? 'big' : key == 1 ? 'medium' : 'small' )">
        </MainArticlesList>
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
