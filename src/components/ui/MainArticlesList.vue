<script setup>
import { convertToEnglish } from '@/utils/convertToLatinLetters';

const props = defineProps({
  title: String,
  articles: Array,
  type
})

console.log(props.articles)
</script>

<template>
<h1 class="div_title">{{ title }}</h1>
<div class="div_list" :class="convertToEnglish(title)">
    <div class = "article_block" :id="convertToEnglish(article.title)" v-for="article in props.articles" 
    :key="article.url">
        <img class="article_img" :src="article.img"></img>
        <span class="article_title">{{ article.title }}</span>
    </div>
</div>
</template>

<style scoped>




    /*-----------------default----------------------*/
    .div_list{
        border-top: 2px solid #7b7b86;
        display: flex;
        flex-wrap: wrap;
        padding-top: 20px;
        width: 102%;
    }

    .article_block{
        max-width: 300px;
        display: grid;
        margin-inline: 15px;
        margin-bottom: 15px;
    }

    .article_img{
        border-radius: 4%;
        height: 170px;
        width: 100%;
    }

    .article_title{
      display: -webkit-box; 
      -webkit-box-orient: vertical; 
      -webkit-line-clamp: 4; 
      overflow: hidden; 
      line-height: 1.5; 
    }

</style>
