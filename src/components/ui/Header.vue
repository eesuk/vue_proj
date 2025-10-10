<script setup>
    import {ref, onMounted} from 'vue'
    import moment from 'moment';
    import 'moment/locale/ru'
    moment.locale("ru")

    const actualDate = ref(moment().format('D MMMM YYYY, H:mm:ss'))

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
    <ul class = "tag-list">
        <li class="tag-name">Новости</li> 
        <li class="tag-name">Россия</li>                             
        <li class="tag-name">Спорт</li>
        <li class="tag-name">Политика</li>
        <li class="tag-name">Экономика</li>
        <li class="tag-name">Общество</li>
        <li class="tag-name">Культура</li>
        <li class="tag-name">Наука</li>
        <li class="tag-name">Эксклюзив</li>
    </ul>
</header>
</template>

<style scoped>

    .header_container{
        display: grid;
        color: #47474e;
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
        border-top: 2px solid;
        border-bottom: 2px solid;
        border-color: #7b7b86;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 99%;
    }

    li{
        padding-inline: 30px;
        padding-block: 15px;
        list-style-type: none;
    }

    li:hover{
        background-color: #ffffff;
    }

</style>
