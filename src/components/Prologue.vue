<template>
    <div
        class="font-baloo text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-center select-none"
    >
        <span ref="typedEl"></span>
    </div>
</template>

<script setup lang="ts">
import Typed from 'typed.js';
import { onBeforeUnmount, onMounted, ref } from 'vue';
const { text } = defineProps<{ text: string }>();
const typedEl = ref<HTMLElement | null>(null);
let typed: Typed | null = null;
onMounted(() => {
    if (typedEl.value) {
        typed = new Typed(typedEl.value, {
            strings: [text],
            typeSpeed: 50,
            showCursor: true,
            cursorChar: '|',
        });
    }
});
onBeforeUnmount(() => {
    typed?.destroy();
});
</script>

<style scoped></style>
