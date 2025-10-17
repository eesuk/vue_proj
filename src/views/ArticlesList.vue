<script setup>
    import { useRoute } from 'vue-router';
    import Header from '@/components/ui/Header.vue';
    import Footer from '@/components/ui/Footer.vue';
    import { convertToEnglish } from '@/utils/convertToLatinLetters';

    import { useArticleStore } from '@/stores/articleStores';
    const { getByKeyToList } = useArticleStore()

    const route = useRoute()
    const {key} = route.query
    const articles = getByKeyToList(key)

    console.log(key)

</script>

<template>
    <Header></Header>
    <div class="article_list">
        <div v-for = "article of articles" class="article_block" :id="article.url">
            <img class = "img" :src="article.img"></img>
            <div class="discription_block">
                <span class="article_title">{{article.title}}</span>
                <div class="keywords_list">
                    <router-link v-for = "key of article.keywords" class="router"
                    :to="{ name: 'titles', 
                    params: { key: convertToEnglish(key).toLowerCase() },
                    query: {key: key.toLowerCase()} }" 
                    >
                        <div class="keyword">
                            <span>{{ key }}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped>

    .article_block{
        display: flex;
        margin-top: 30px;
        width: 1300;
        gap: 30px;
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

    .keywords_list{
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        max-height: 350px;
        align-content: flex-end;
    }

    .router{
        text-decoration: none;
    }

    .keyword {
        background-color: #313134;
        color: aliceblue;
        border: 1px solid;
        padding-inline: 10px;
        border-radius: 100px;
        height: 30px;
    }

    .keyword > span{
        font-size: 10px;
    }
</style>