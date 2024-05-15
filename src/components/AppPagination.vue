<script setup>
import { watch, ref, computed } from 'vue';
import LeftIcon from '@/assets/images/left.svg?component';
import RightIcon from '@/assets/images/right.svg?component';
import LeftDoubleIcon from '@/assets/images/left-left.svg?component';
import RightDoubleIcon from '@/assets/images/right-right.svg?component';


const emits = defineEmits(['onSetPage']);

const props = defineProps({
    pages: {
        type: Number,
        required: true,
    },
});

const currentPage = ref(1);

const setPage = (page) => currentPage.value = page;
const setFirstPage = (page) => currentPage.value = 1;
const setLastPage = (page) => currentPage.value = props.pages;
const incrementPage = () => currentPage.value +=1;
const decrementPage = () => currentPage.value -=1;

watch(currentPage, () => emits('onSetPage', currentPage.value));

</script>

<template>
    <div class="pagination">
        <div
            class="pagination__item"
            :class="{disabled: currentPage === 1}"
            @click="setFirstPage"
        >
            <LeftDoubleIcon/>
        </div>
        <div
            class="pagination__item"
            :class="{disabled: currentPage === 1}"
            @click="decrementPage"
        >
            <LeftIcon/>
        </div>
        <div
            v-for="(page) in pages"
            :class="{ active: page === currentPage }"
            class="pagination__item"
            @click="setPage(page)"
        >
            <div>{{ page }}</div>
        </div>
        <div
            class="pagination__item"
            :class="{disabled: currentPage === pages}"
            @click="incrementPage"
        >
            <RightIcon/>
        </div>
        <div
            class="pagination__item"
            :class="{disabled: currentPage === pages}"
            @click="setLastPage"
        >
            <RightDoubleIcon/>
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
            background: var(--accent);
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

    & svg path {
        fill: red !important;
    }
}

</style>
