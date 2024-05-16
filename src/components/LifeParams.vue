<script setup lang="ts">
import type {LifeStatus} from "@/types";

interface Props {
    status: LifeStatus,
    species: string,
}
const props = defineProps<Props>();

</script>

<template>
    <div class="subtitle" :class="status">{{ status }} - {{ species }}</div>
</template>

<style scoped lang="scss">
.subtitle {
    line-height: 20px;

    &::before {
        content: '';
        height: 8px;
        width: 8px;
        margin-bottom: 1px;
        display: inline-block;
        margin-right: 5px;
        border-radius: 50%;
    }

    &.Alive::before {
        background: rgb(85, 204, 68);
    }

    &.Dead::before {
        background: rgb(214, 61, 46);
    }

    &.unknown::before {
        background: rgb(158, 158, 158);
    }
}
</style>