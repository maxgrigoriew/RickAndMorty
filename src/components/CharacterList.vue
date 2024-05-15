<script setup>
import CharacterListItem from '@/components/CharacterListItem.vue';

const props = defineProps({
    characters: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <ul class="list">
        <CharacterListItem :character="character" v-for="character in characters" :key="item"/>
    </ul>
</template>

<style scoped lang="scss">
.list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 100px 0;
}

@media (max-width: 1440px) {
    .list {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 992px) {
    .list {
        grid-template-columns: 1fr;
    }
}
</style>