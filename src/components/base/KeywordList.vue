<script setup>
import { convertToEnglish } from '@/utils/convertToLatinLetters';

const props = defineProps({
  keywords: Array
})

</script>

<template>
<div class="keywords_list">
    <router-link v-for = "key of keywords" class="router" :key = "convertToEnglish(key)"
    :to="{ name: 'titles', 
    params: { key: convertToEnglish(key) },
    query: {key: key } }" 
    >
        <div class="keyword">
            <span>{{ key }}</span>
        </div>
    </router-link>
</div>
</template>

<style scoped>


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