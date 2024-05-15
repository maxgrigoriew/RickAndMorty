<script setup>
import { onMounted, ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import CharacterList from '@/components/CharacterList.vue';
import AppPagination from '@/components/AppPagination.vue';

const characters = ref([]);

onMounted(() => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(data => data.json())
        .then(data => {
            characters.value = [ ...data.results ];
        });
});
</script>

<template>

    <div class="hero">
        <div class="container">
            <AppHeader/>
            <div class="hero__title">The Rick and Morty</div>
        </div>
    </div>

    <div class="content">
        <div class="character">
            <div class="container">
                <AppPagination/>

                <CharacterList :characters="characters"/>
            </div>

        </div>

        <div class="footer">
            <div class="container">
                <div class="footer__inner">Footer</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.hero {
    background-image: url("./assets/images/hero.svg");

    &__title {
        text-align: center;
        padding-top: 100px;
        margin-bottom: 200px;
        font-size: 100px;
        font-weight: 900;
        font-family: sans-serif;
    }
}

.content {
    background: var(--gray-dark);

}

.footer {
    color: red;
    padding: 50px 0;
    background: var(--black);

    .footer__inner {
        text-align: center;
        color: var(--light);
    }
}
</style>