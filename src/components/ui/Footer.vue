<script setup>
</script>

<template>
    <footer>
        <div class="logo-row">
            <img class="logo-img" src="../../assets/logo.png"></img>
        </div>
        <div class="others">
            <span>Copyright 2024</span>
            <div class="social-media-icon-block">
                <img class="social-media-icon" src="../../assets/icon-telegram.png"></img>
                <img class="social-media-icon" src="../../assets/icon-vk.png"></img>
                <img class="social-media-icon" src="../../assets/icon-youtube.png"></img>
                <img class="social-media-icon" src="../../assets/icon-odnoklassniki.png"></img>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer{
        margin-top: 5px;
        display: grid;
    }

    .logo-row{
        margin-top: 50px;
        border-top: 3px solid #000000;
        width: 102%;
    }

    .logo-img{
        margin-top: 10px;
        height: 60px;
        width: 200px;
    }

    .others{
        display: flex;
        justify-content: space-between;
        border-top: 2px solid #7b7b86;
        border-bottom: 2px solid #7b7b86;
        width: 102%;
        padding-block: 15px;
        color: #454549;
        margin-bottom: 10px
    }

    span{
        margin-left: 10px;
        align-self: center;
    }

    .social-media-icon-block{
        display: flex;
        justify-content: space-between;
        width: 170px;
    }

    .social-media-icon{
        height: 30px;
        width: 30px;
    }

</style>
