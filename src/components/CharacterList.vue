<script setup>
import CharacterListItem from '@/components/CharacterListItem.vue';

</script>

<template>
<ul class="list">
    <CharacterListItem v-for="item in 8" :key="item"/>
</ul>
</template>

<style scoped lang="scss">
.list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 100px 0;
}
</style>