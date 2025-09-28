<template>
    <div
        @mousedown="toggleSelection"
        @mousemove="updateSelection"
        @mouseleave="endSelection"
        :class="cursorClass"
    >
        <div
            :style="{
                transform: `scale(${scaleFactor})`,
                transformOrigin: 'center center',
                transition: selecting ? 'none' : 'transform 0.2 ease',
            }"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

const dragger = reactive({
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
});
const selecting = ref(false);
const endSelection = () => {
    selecting.value = false;
};
const toggleSelection = (e: MouseEvent) => {
    if (e.button !== 0) return;

    if (!selecting.value) {
        // 开始选择
        selecting.value = true;
        dragger.startX = e.clientX;
        dragger.startY = e.clientY;
        dragger.currentX = e.clientX;
        dragger.currentY = e.clientY;
    } else {
        // 停止选择
        selecting.value = false;
    }
};
const cursorClass = computed(() => {
    if (selecting.value) {
        return 'cursor-grabbing';
    }
    return 'cursor-grab';
});
const updateSelection = (e: MouseEvent) => {
    if (!selecting.value) return;

    dragger.currentX = e.clientX;
    dragger.currentY = e.clientY;
};

const scaleFactor = computed(() => {
    if (!selecting.value) return 1;

    const deltaX = dragger.currentX - dragger.startX;
    const deltaY = dragger.currentY - dragger.startY;

    // 计算角度来确定移动方向
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // 根据角度判断是放大还是缩小
    // 右上和右下象限为放大，左上和左下象限为缩小
    const isZoomIn = angle >= -Math.PI / 2 && angle <= Math.PI / 2;

    let scale = isZoomIn
        ? 1 + distance / 200 // 放大
        : 1 - distance / 200; // 缩小

    // 限制缩放范围在 0.5 ~ 3 之间
    scale = Math.max(0.5, Math.min(3, scale));

    return scale;
});
</script>

<style scoped></style>
