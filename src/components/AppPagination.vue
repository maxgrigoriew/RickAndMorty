<script setup>
import { watch, computed } from 'vue';

const emits = defineEmits('fetchData');

const props = defineProps({
    pages: {
        type: Number,
        default: 10
    },
    currentPage: {
        type: Number,
        default: 1
    }
});
watch(
    () => props.currentPage,
    () => {
        emits('fetchData');
    },
);

// const disabled = computed(() =>
//     store.currentPage === 1 ? $style.disabled : '',
// );
</script>

<template>
    <div class="pagination">
        <div
            class="style.pagination__item"
            @click="emits('setFirstPage')"
        >
            1
        </div>
        <div
            class="pagination__item"
            :class="[currentPage === 1 || !pages ? 'disabled' : '']"
            @click="emits('decrementPage')"
        >
            2
        </div>
        <div
            v-for="(pagination, ind) in pages"
            :key="ind"
            :class="[pagination === currentPage ? 'active' : '']"
            class="pagination__item"
            @click="emits('setPage', pagination)"
        >
            <div>{{ pagination }}</div>
        </div>

        <div
            class="pagination__item"
            :class="[currentPage === pages || !pages ? 'disabled' : '']"
            @click="emits('incrementPage')"
        >
            3
        </div>
        <div
            class="pagination__item"
            :class="[ currentPage === pages || !pages ? 'disabled' : '']"
            @click="emits('setLastPage')"
        >
            4
        </div>
    </div>
</template>

<style scoped lang="scss">

.pagination {
    --border-radius: 10px;

    display: flex;
    justify-content: center;
    column-gap: 10px;
    border-radius: 10px;

    &__item {
        border: 2px solid var(--accent);
        border-radius: var(--border-radius);
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: -1px;
        color: var(--light);
        cursor: pointer;
        font-size: 18px;
        font-weight: 500;
        transition: all var(--transition);

        &:hover {
            background: var(--accent);
            color: var(--light)
        }

        &.disabled:hover {
            background-color: var(--light);
        }

        &:first-child {
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }

        &:last-child {
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }

        &.active {
            background: var(--default);
            color: var(--light);
        }

        &.disabled {
            pointer-events: none;
            opacity: 0.3;
        }
    }

    &__arrow {
        fill: var(--default);
    }
}

</style>
