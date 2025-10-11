<script setup>
import { convertToEnglish } from '@/utils/convertToLatinLetters';

const props = defineProps({
  title: String,
  articles: Array,
  type: String
})

const type = props.type;

console.log(props.articles)
</script>

<template>
<div v-if="type == 'small'" :class = "'theme_block_' + type">
    <h1 class="div_title">{{ title }}</h1>
    <div class="div_list">

        <div :class = "'article_block_' + type"  :id="article.url" v-for="article in props.articles" 
        :key="article.url">
            <img :class="'article_img_' + type" :src="article.img"></img>
            <span :class="'article_title_' + type">{{ article.title }}</span>
        </div>

    </div>
</div>

<div v-else-if="type == 'medium'" :class = "'theme_block_' + type">
    <h1 class="div_title">{{ title }}</h1>
    <div class="div_list_medium">

        <div :class = "'article_block_' + type + (key == 0 ? '_first' : '_second')" :id="article.url" v-for="(article, key) in props.articles" 
        :key="article.url">
            <img class="article_img" :src="article.img"></img>
            <span class="article_title">{{ article.title }}</span>
        </div>

    </div>
</div>

<div v-else :class = "'theme_block_' + type">
    <h1 class="div_title">{{ title }}</h1>
    <div class="div_list">

        <div :class="'article_block_' + type + '_first'" :id="articles[0].url">
            <img class="article_img" :src="articles[0].img"></img>
            <span class="article_title">{{ articles[0].title }}</span>
        </div>

        <div class="article_column_big">
            <div :class="'article_block_' + type + '_second'" v-for="article in props.articles.slice(1, 3)" :key="article.url">
                <span class="article_title">{{ article.title }}</span>
                <img class="article_img" :src="article.img"></img>
            </div>
        </div>

        <div class="article_raw_big">
            <div :class="'article_block_' + type + '_third'" v-for="article in props.articles.slice(3, 6)">
                <img class="article_img" :src="article.img"></img>
                <span class="article_title">{{ article.title }}</span>
            </div>
        </div>

    </div>
</div>
</template>

<style scoped>

    .div_list{
        border-top: 2px solid #7b7b86;
        display: flex;
        flex-wrap: wrap;
        padding-top: 20px;
        width: 102%;
    }

    /*-----------------small----------------------*/

    .article_block_small{
        max-width: 300px;
        display: grid;
        margin-inline: 15px;
        margin-bottom: 15px;
    }

    .article_img_small{
        border-radius: 4%;
        height: 170px;
        width: 100%;
    }

    .article_title_small{
      display: -webkit-box; 
      -webkit-box-orient: vertical; 
      -webkit-line-clamp: 4; 
      overflow: hidden; 
      line-height: 1.5; 
    }

    /*-----------------medium--------------------*/

    .div_list_medium {

    }   

    .article_block_medium_first {

    }

    .article_block_medium_first > img {

    }

    .article_block_medium_second {

    }

    .article_block_medium_second > img {

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
