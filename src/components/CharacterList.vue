<script setup lang="ts">
import CharacterListItem from '@/components/CharacterListItem.vue';
import {computed} from 'vue';
import type { Character} from '@/types/index'


interface Props {
    characters: Character[]
}

const props = defineProps<Props>();
const hasCharacters = computed(() => props.characters)
</script>

<template>
    <ul v-if="hasCharacters" class="list">
        <CharacterListItem :character="character" v-for="character in characters"/>
    </ul>

    <div v-else class="empty">List is empty</div>
</template>

<style scoped lang="scss">
.list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 100px 0;
}

.empty {
    padding: 10px 0;
    text-align: center;
    color: var(--light);
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