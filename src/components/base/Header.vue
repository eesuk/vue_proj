<script setup>
    import {ref, onMounted} from 'vue'
    import moment from 'moment';
    import 'moment/locale/ru'

    import { convertToEnglish } from '@/utils/convertToLatinLetters';

    moment.locale("ru")
    const actualDate = ref(moment().format('D MMMM YYYY, H:mm:ss'))
    const keys = ['Россия', 'Спорт', 'Политика', 'Экономика' , 'Общество', 'Культура', 'Наука']

    onMounted(() => {
        setInterval(() => {
            actualDate.value = moment().format('D MMMM YYYY, H:mm:ss')
        }, 1000)
    })
</script>

<template>
<header class="header_container">
    <div class = 'date-block'>
        <span class="date-span">{{actualDate}}</span>
    </div>
    <img class="logo-img-header" src="../../assets/logo.png"></img>
</header>

    <ul class = "tag-list">
        <router-link :to="{path: '/'}" class="tag-name">
            <li>
                Главная
            </li> 
        </router-link>
        <router-link :to="{ name: 'titles', 
        params: { key: 'NEW' },
        query: {key: 'NEW'} }"
        class="tag-name">
            <li>
                Новости
            </li>
        </router-link>
        <router-link v-for = "key in keys" 
        :to="{ name: 'titles', 
        params: { key: convertToEnglish(key).toLowerCase() },
        query: {key: key.toLowerCase()} }" 
        class="tag-name">
            <li>
                {{ key }}
            </li>
        </router-link>
    </ul>
</template>

<style scoped>

    .header_container{
        display: grid;
        max-width: 1300px;
        margin: 10px auto;
    }

    .date-block{
        border-top: 2px solid;
        border-bottom: 2px solid;
        border-color: #7b7b86;
        padding: 15px;
        width: 100%;
    }

    .logo-img-header{
        height: 100px;
        width: 350px;
        padding: 10px;
        justify-self: center;
    }

    .tag-list{
        position: sticky;
        top: -2px;
        z-index: 1;
        border-top: 2px solid;
        border-bottom: 2px solid;
        border-color: #7b7b86;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 99%;
        background-color: #f4f4f9;
    }

    li{
        padding-inline: 30px;
        padding-block: 15px;
        list-style-type: none;
    }

    .tag-name{
        color: #47474e;
        text-decoration: none;
    }

    li:hover{
        background-color: #ffffff;
    }

</style>
