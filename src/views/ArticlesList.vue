<script setup>
    import { useRoute } from 'vue-router';
    import { ref, watch} from 'vue';

    import { useArticleStore } from '@/stores/articleStores';
    const { getByKeyToList, GetLength } = useArticleStore()
    
    import Header from '@/components/base/Header.vue';
    import ArticleBlock from '@/components/ui/ArticleBlock.vue';
    import Footer from '@/components/base/Footer.vue';

    const route = useRoute()
    const {key} = route.query

    const amount = ref(10)
    const listLength = GetLength(key)

    const articles = ref(getByKeyToList(key, amount.value).slice(0, amount.value))

    const loadMore = () => {
        amount.value += 10
    }

    watch (amount, () => {
        articles.value = getByKeyToList(key, amount.value).slice(0, amount.value)
        console.log(listLength)
        console.log(amount.value)
    })

</script>

<template>
    <Header></Header>

    <div class="article_list">
        <ArticleBlock v-for="article in articles" :article="article"></ArticleBlock>
    </div>
    <button v-if="listLength > amount" class="load_btn" @click="loadMore">Загрузить еще</button>
    
    <Footer></Footer>
</template>

<style scoped>

    .load_btn{
        display: block;
        justify-self: center;
        margin-top: 60px;
        background-color: #f4f4f9;
        border: 3px solid;
        padding: 15px;
        border-radius: 50px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }

</style>