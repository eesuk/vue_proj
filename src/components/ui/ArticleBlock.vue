<script setup>
import KeywordList from '@/components/base/KeywordList.vue';
import { convertToEnglish } from '@/utils/convertToLatinLetters';


const props = defineProps({
  article: Object
})

</script>

<template>
    <div :id="article.url">   
        <router-link  :key = "article.url" class="article_block"
        :to="{ name: 'article', 
        params: { title: convertToEnglish(article.title) },
        query: {title: article.title}}" 
        >
            <img class = "img" :src="article.img"></img>
            <div class="discription_block">
                <span class="article_title">{{article.title}}</span>
                <KeywordList :keywords = "article.keywords"></KeywordList>
            </div>
        </router-link>
    </div>
</template>

<style scoped>

    .article_block {
        display: flex;
        margin-top: 30px;
        width: 1300px; 
        gap: 30px;
        text-decoration: none; 
        color: inherit;         
    }

    .img{
        height: 200px;
        width: auto;
    }

    .discription_block{
        display: grid;
    }

    .article_title{
       font-size:large;
       margin-top: 5px;
    }

</style>