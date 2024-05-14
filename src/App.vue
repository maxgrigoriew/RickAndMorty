<script setup>
import AppHeader from '@/components/AppHeader.vue';
import CharacterList from '@/components/CharacterList.vue';
</script>

<template>
    <div class="content">
        <div class="container">
            <AppHeader/>
            <div class="title">The Rick and Morty</div>

        </div>
            <div class="character">
                <div class="container">
                    <CharacterList/>
                </div>
            </div>

    </div>
</template>

<style scoped>
    .content {
        .title  {
            text-align: center;
            padding-top: 100px;
            margin-bottom: 200px;
            font-size: 100px;
            font-weight: 900;
            font-family: sans-serif;
        }

        .character {
            background: var(--gray-dark);
        }
    }
</style>