<script setup lang="ts">
import {computed, ref} from 'vue';
import type {Status} from "@/types";

interface Props {
    options: Status[],
    modelValue: string
}

const props = defineProps<Props>();
const emits = defineEmits<{
    option: [value: string];
}>();

const open = ref(false);

const selectOption = (id: string) => {
    open.value = false
    emits('option', id)

}
</script>

<template>
    <div
        v-click-outside="() => (open = false)"
        class="customSelect"
        :class="[ open === true ? 'open' : '']">
        <div
            class="selected"
            :class="[open === true ? 'show' : '']"
            @click="open = !open">
            <div class="selected__title">
                {{ modelValue }}
                <slot v-if="!modelValue"/>
            </div>
        </div>

        <div class="items">
            <div
                class="items__select">
                <div
                    v-for="option of options"
                    :key="option.name"
                    class="item"
                    @click="selectOption(option.id)">
                    <div class="item__title">{{ option.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.customSelect {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    line-height: 37px;
    z-index: 2;
    color: var(--light);
    font-size: 18px;
    font-weight: 700;
}

.customSelect .selected {

    &:hover {
        background: var(--accent);
    }

    &::after {
        position: absolute;
        content: '';
        top: 20px;
        right: 1em;
        width: 0;
        height: 0;
        transition: var(--transition);
        transform: rotate(0) translateY(0);
        transform-origin: top;
        border: 5px solid var(--light);
        border-color: var(--light) transparent transparent transparent;
        z-index: 100;
    }

}

.customSelect.open .selected {

    background: var(--gray-dark);
    &::after {
        transform: rotate(180deg) translateY(-3px);
    }
}

.selected {
    border-radius: var(--border-radius);
    border: 2px solid var(--accent);
    background: var(--gray-dark);
    padding-left: 15px;
    padding-right: 44px;
    cursor: pointer;
    user-select: none;
    transition: var(--transition);

    &__title {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    &.show {
        & ~ .items {
            max-height: 350px;
            //transition: var(--transition);
            visibility: visible;
        }
    }
}

.customSelect.open .selected {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.selected:after {
    position: absolute;
    content: '';
    top: 22px;
    right: 10px;
    width: 0;
    height: 0;
}

.items {
    position: relative;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 2px solid var(--accent);
    border-left: 2px solid var(--accent);
    border-bottom: 1px solid var(--accent);
    position: absolute;
    background: var(--gray-dark);
    left: 0;
    right: 0;
    z-index: 10;
    max-height: 0;
    transition: var(--transition);
    visibility: hidden;
}

.item {
    padding: 0 10px;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    scrollbar-color: var(--accent);
    scrollbar-width: thin;
    color: var(--default);
    transition: var(--transition);

    &__title {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    &:hover {
        background: var(--accent);
    }
}

</style>
