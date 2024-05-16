<script setup lang="ts">
import {onMounted, ref, reactive} from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import CharacterList from '@/components/CharacterList.vue';
import AppPagination from '@/components/AppPagination.vue';
import CharacterServices from '@/services/CharacterServices.js';
import InputSearch from '@/components/InputSearch.vue';
import SelectSearch from "@/components/SelectSearch.vue";
import type {Query, Status} from "@/types";


function emptyQuery(): Query {
    return {
        name: '',
        status: '',
        page: null,
    }
}

const characters = ref([]);
const pages = ref(0);

const statuses: Status[] = ref([
    {id: 'alive', name: 'Alive'},
    {id: 'dead', name: 'Dead'},
    {id: 'unknown', name: 'unknown'},
])

const query: Query = reactive({
    ...emptyQuery()
})
const fetchCharacters = async (query: any) => {
    try {
        const response = await CharacterServices.getAllCharacter(query);
        characters.value = response?.data?.results;
        pages.value = response?.data?.info?.pages;
    } catch (e) {
        alert('Поиск не дал результатов. Введите другие параметры')
        console.error(e);
    }
};

const setPage = (page: number): void => {
    query.page = page;
    fetchCharacters(query)
};
const setStatus = (status: string): void => {
    query.status = status
};
const clearSearch = (): void => {
    Object.assign(query, emptyQuery())
    fetchCharacters(query)
}

onMounted(() => {
    fetchCharacters(query);
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
        <div class="search-panel">
            <div class="container">
                <div class="search-panel__inner">
                    <InputSearch v-model="query.name"/>
                    <select-search
                        v-model="query.status"
                        :options="statuses"
                        @option="setStatus">
                        Status
                    </select-search>

                    <button @click="fetchCharacters(query)" class="border light">Найти</button>
                    <button @click="clearSearch" class="border light">Сбросить</button>
                </div>
            </div>
        </div>

        <div class="character">
            <div class="container">
                <CharacterList :characters="characters"/>
                <AppPagination :pages="pages"
                               @onSetPage="setPage"/>
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

.search-panel {
    &__inner {
        display: flex;
        column-gap: 10px;
        padding-top: 50px;
    }
}

.footer {
    padding: 50px 0;
    background: var(--black);

    .footer__inner {
        text-align: center;
        color: var(--light);
    }
}
</style>