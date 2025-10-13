<script setup>

const props = defineProps({
    article: Object,
    className: String,
    type: String
})

</script>

<template>
    <div :class = "props.className"  :id="props.article.url">
        <img :class="'article_img_' + props.type" :src="props.article.img"></img>
        <span :class="'article_title_' + props.type">{{ props.article.title }}</span>
    </div>
</template>

<style scoped>

/*---------------small-----------------------*/

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
      align-self: center;
    }

/*---------------medium-----------------------*/

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

      .article_block_medium_second > img {
        border-radius: 2%;
        width: 50%;
        height: 100%;
    }

    .article_block_medium_second > span {
        align-self: center;
        font-size: 14px;
    }

    /*---------------big-----------------------*/

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