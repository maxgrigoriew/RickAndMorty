<script setup lang="ts">
import LifeParams from '@/components/LifeParams.vue';
import type {Character} from '@/types/index'

interface Props {
    character: Character
}

const props = defineProps<Props>();

</script>

<template>
    <li class="item">
        <img class="img" :src="character.image" alt="">
        <div class="content">
            <div class="header">
                <a href="#" class="title">{{ character.name }}</a>
                <LifeParams :status="character.status" :species="character.species"/>
            </div>

            <div class="block">
                <div class="name">Last known location:</div>
                <a :href="character.location?.url" class="description">{{ character.location?.name }}</a>
            </div>

            <div class="block">
                <div class="name">Last known location:</div>
                <a href="#" class="description">Last known location:</a>
            </div>
        </div>
    </li>
</template>

<style scoped lang="scss">
.item {
    display: flex;
    background: var(--gray-medium);
    overflow: hidden;
    color: var(--light);
    font-weight: 500;
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);

    .img {
        width: 200px;
        object-fit: cover;
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
    }

    .content {
        padding: 10px;
        display: flex;
        flex-direction: column;
        flex: 3 1 0%;
    }

    .header {
        .title {
            font-size: 26px;
            font-weight: 800;
        }
    }

    .block {
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        column-gap: 10px;

        .name {
            color: var(--gray-light);
        }

        .description {
            font-size: 18px;
        }
    }

}
</style>