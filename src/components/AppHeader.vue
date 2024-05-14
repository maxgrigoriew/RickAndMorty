<script setup>

</script>

<template>
    <div class="header">
        <a href="#" class="logo">
            <img src="./../assets/images/logo.svg" alt="">
        </a>
        <div class="buttons">
            <button class="button">Docs</button>
            <button class="button">About</button>
            <button class="button border">Support us</button>
        </div>
    </div>

</template>

<style scoped lang="scss">

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .buttons {
        display: inline-flex;
        align-items: center;
        column-gap: 10px;
    }
}

</style>