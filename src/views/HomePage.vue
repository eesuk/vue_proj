<script setup>
import Header from '@/components/base/Header.vue';
import MainArticlesList from '@/components/ui/MainArticlesList.vue';
import Footer from '@/components/base/Footer.vue';

import { useArticleStore } from '@/stores/articleStores';

const articlesStore = useArticleStore()
const keywordsList = ['NEW', 'наука', 'общество', 'культура', 'экономика', 'спорт', 'россия']

</script>

<template>
    <Header></Header>
    <main>
        <MainArticlesList v-for="(keyword, key) in keywordsList"
        :title="(key == 0 ? 'Последний новости' : ( keyword[0].toUpperCase() + keyword.slice(1) ))"
        :articles="articlesStore.getByKeyToMain(keywordsList[key])" 
        :type="(key == 0 ? 'big' : key == 1 ? 'medium' : 'small' )"
        :keyToRoute ="keyword"
        >
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
