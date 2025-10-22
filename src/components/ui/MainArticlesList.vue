<script setup>
import MainArticle from '../base/MainArticle.vue';
import { convertToEnglish } from '@/utils/convertToLatinLetters';

const props = defineProps({
  title: String,
  articles: Array,
  type: String,
  keyToRoute: String,
})

const type = props.type;

</script>

<template>
<div class="theme_block_">
    <div class = "title_and_btn">
        <h1 class="div_title">{{ title }}</h1>

            <router-link class="router"
            :to="{ name: 'titles', 
            params: { key: convertToEnglish(keyToRoute) },
            query: {key: keyToRoute} }" 
            >
                <div class="viewall_block">
                    <span class="viewall_span">Перейти</span>
                    <img  class="viewall_btn" src="../../assets/arrow_right.png"></img>
                </div>

            </router-link>
            
    </div>

    <div v-if="type == 'small'" class = "div_list">

        <MainArticle v-for="article in props.articles" 
            :article="article" 
            :className = "'article_block_' + type"
            :type = "type"  
            :articles:id="article.url" 
            :key="article.url"
        >
        </MainArticle>

    </div>

    <div v-else-if="type == 'medium'" class = "div_list">

         <MainArticle 
            :className="'article_block_' + type + '_first'" 
            :article="articles[0]"
            :type = "type"
            :id="articles[0].url"
            :key="articles[0].url">
        </MainArticle>

        <div class="article_column_medium">
            <MainArticle v-for="(article, key) in props.articles.slice(1, 4)"
                :className = "'article_block_' + type +'_second'" 
                :article="article"
                :type = "type"
                :id="article.url"
                :key="article.url">
            </MainArticle>
        </div>

    </div>

    <div v-else class = "div_list">

        <MainArticle 
            :className="'article_block_' + type + '_first'" 
            :article="articles[0]"
            :type = "type"
            :id="articles[0].url"
            :key="articles[0].url">
        </MainArticle>

        <div class="article_column_big">
            <MainArticle v-for="article in props.articles.slice(1, 3)" 
                :className="'article_block_' + type + '_second'" 
                :article="article"
                :type = "type"
                :id="article.url"
                :key="article.url">
            </MainArticle>
        </div>

        <div class="article_raw_big">
            <MainArticle v-for="article in props.articles.slice(3, 6)" 
                :className="'article_block_' + type + '_third'" 
                :article="article"
                :type = "type"
                :id="article.url"
                :key="article.url">
            </MainArticle>
        </div>

    </div>
</div>
</template>

<style scoped>

    .theme_block_{
        margin-top: 50px;
    }

    .div_list{
        border-top: 2px solid #7b7b86;
        display: flex;
        flex-wrap: wrap;
        padding-top: 20px;
        width: 102%;
        justify-content: space-between;
    }

    .title_and_btn{
        display: flex;
        justify-content: space-between;
    }

    .viewall_block{
        display: flex;
        margin-top: 20px;
        width: 130px;
        justify-content: space-between;
        align-items: center;
    }

    .router{
        text-decoration: none;
        font-size: 20px;
        color: black
    }

    .viewall_btn{
        height: 35px;
    }

    /*-----------------small----------------------*/

    .article_block_small{
        max-width: 300px;
        display: grid;
        margin-inline: 15px;
        margin-bottom: 15px;
    }

    /*-----------------medium--------------------*/

    .article_block_medium_first {
        display: grid;
        width: 720px;
        height: 650px;
    }

    .article_block_medium_first > img {
        border-radius: 2%;
        width: 100%;
        height: 100%;;
    }

    .article_block_medium_first > span {
        font-size: 30px;
        margin: 0;
        text-align: center;
        color:#595962;
    }

    .article_column_medium{
        display: grid;
        width: 580px;
        height: 520px;
    }

    .article_block_medium_second {
        display: flex;
        gap: 25px;
        width: 100%;
        height: 150px;
    }

    .article_block_medium_second > img {
        border-radius: 2%;
        width: 50%;
        height: 100%;
    }

    .article_block_medium_second > span {
        align-self: center;
        font-size: 14px;
    }

    /*-----------------big-----------------------*/

    .article_block_big_first{
        width: 650px;
        height: 500px;
    }

    .article_block_big_first > img{
        border-radius: 2%;
        width: 100%;
        height: 100%;
        display: block;
    }

    .article_block_big_first > span{
        position: relative;
        display: block;
        text-align: center;
        width: 90%;
        top:-80px;
        left: 20px;
        background-color: #ededf6;
        border: 1px solid #b6b6c2;
        box-shadow: 1px 10px 10px 1px rgba(62, 60, 60, 0.5);
        border-radius: 5px;
        padding: 5px;
    }

    .article_column_big{
        display: flex;
        flex-direction: column;
        width: 47%;
        padding-left: 50px;
    }

    .article_block_big_second{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row-reverse;
        gap: 15px
    }

    .article_block_big_second > img{
        width: 50%;
        height: 90%;
        border-radius: 2%;
    }

    .article_block_big_second > span{
        display: block;
        width: 50%;
        align-self: center;
    }

    .article_raw_big{
        display: flex;
        margin-top: 30px;
        margin-left: 20px;       
    }

    .article_block_big_third{
        width: 100%;
        display: grid;
    }

    .article_block_big_third > img{
        border-radius: 2%;
        width: 95%;
    }

    .article_block_big_third > span{
        margin: 10px;
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 4; 
        overflow: hidden; 
        line-height: 1.5; 
    }

</style>
