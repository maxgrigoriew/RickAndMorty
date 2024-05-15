<script setup>
import { onMounted, ref, watch } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import CharacterList from '@/components/CharacterList.vue';
import AppPagination from '@/components/AppPagination.vue';
import CharacterServices from '@/services/CharacterServices.js';

const FIRST_PAGE = 1;
const characters = ref([]);
const pages = ref(1);
const query = {

}

const fetchCharacters = async (currentPage) => {
    try {
        const response = await CharacterServices.getAllCharacter(currentPage, 'alive', 'SAN');
        characters.value = response.data.results;
        pages.value = response.data.info.pages;
    } catch (e) {
        console.error(e);
    }
};

const setPage = (page) => fetchCharacters(page);

onMounted(() => {
    fetchCharacters(FIRST_PAGE);
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
                <AppPagination :pages="pages"
                               @onSetPage="setPage"/>

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