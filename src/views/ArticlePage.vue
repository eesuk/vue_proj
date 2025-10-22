<script setup>
import { useRoute } from 'vue-router';

import { useArticleStore } from '@/stores/articleStores';
const { getByTitle } = useArticleStore()

import Header from '@/components/base/Header.vue';
import Footer from '@/components/base/Footer.vue';
import KeywordList from '@/components/base/KeywordList.vue';

const route = useRoute()
const {title} = route.query

const indentAfterNewlines = (text) => {
    return text.replace(/\n/g, '\n\t');
}


const article = getByTitle(title)

</script>

<template>
    <Header></Header>
    <div class="article_block">
        <div class="title_block">
            <h1>{{ article.title}}</h1>
        </div>

        <div class="summary_block">
            <span>{{ article.summary }}</span>
        </div>

        <img class="main_img" :src="article.img"></img>

        <div class="content_block">
            {{ indentAfterNewlines(article.content) }}
        </div>
        
        <div class="keywords_block">
            <KeywordList :keywords="article.keywords"></KeywordList>
        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped>

    .article_block{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title_block{
        width: 100%;
        border-bottom: 2px solid #7b7b86 ;
    }

    .summary_block{
        margin-top: 30px;
    }

    .summary_block > span{
        font-weight:bold;
        color: #505055;
    }

    .main_img{
        margin-top: 40px;
        align-self: center;
    }

    .content_block{
        margin-top: 40px;
        white-space: pre-wrap;
    }

    .keywords_block{
        margin-top: 30px;
        padding: 10px;
        width: 100%;
        border-top: 2px solid #7b7b86 ;
    }

</style>