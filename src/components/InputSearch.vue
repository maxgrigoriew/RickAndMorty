<script setup>

const props = defineProps([ 'modelValue' ]);
const emits = defineEmits([ 'update:modelValue' ]);
</script>

<template>
    <input
        class="input"
        type="text"
        placeholder="Введите текст"
        :value="modelValue"
        @input="emits('update:modelValue', $event.target.value)"
    />
</template>
<style scoped lang="scss">
.input {
    width: 100%;
    max-width: 300px;
    display: block;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    border: 2px solid var(--accent);
    border-radius: var(--border-radius);
    padding: 8px 18px;
    background: transparent;
    color: var(--light);

    &::placeholder {
        color: var(--gray-light);
    }
}

</style>
