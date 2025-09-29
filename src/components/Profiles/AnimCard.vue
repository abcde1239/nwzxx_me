<template>
    <div class="game-card w-120 min-h-50">
        <div class="mb-1 font-baloo font-size-10">
            Anim?

            <!-- 图片区 -->
            <div class="shadow-lg flex flex-col rounded bg-gray-50 pt-5">
                <div class="flex justify-center">
                    <transition
                        mode="out-in"
                        enter-active-class="transition-all duration-200 ease-in-out opacity-100"
                        leave-active-class="transition-all duration-200 ease-in-out opacity-0"
                    >
                        <img
                            :src="`/img/anim/${currentAnim?.key}.background.jpg`"
                            alt="anim-bg"
                            class="flex w-110"
                        />
                    </transition>
                </div>
                <!-- 头像区 -->
                <div class="flex flex-1 gap-1">
                    <div
                        v-for="anim in animList"
                        :key="anim.key"
                        @click="handleShownGameUpdate(anim.key)"
                    >
                        <img
                            :src="`/img/anim/${anim.key}.jpg`"
                            alt="icon"
                            class="m-1 p-2 w-20 rounded-xl shadow-lg hover-scale-105 cursor-pointer"
                        />
                    </div>
                </div>
                <!-- 介绍区 -->
                <div class="flex flex-1 flex-col py-0 pl-4">
                    <p class="m-0 font-bold font-size-8">{{ currentAnim?.name }}</p>
                    <p class="m-0 text-gray-500 font-size-6">{{ currentAnim?.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const animList = [
    {
        key: 'denpa-onna-to-seishun-otoko',
        name: 'Denpa Onna to Seishun Otoko',
        desc: 'Commemorating my dear moment',
    },
    { key: 'grand-blue', name: 'Grand Blue', desc: 'Just diving...' },
];
const currentAnimKey = ref('denpa-onna-to-seishun-otoko');
const currentAnim = computed(() =>
    animList.find((anim) => {
        if (anim.key === currentAnimKey.value) return anim;
    }),
);

const handleShownGameUpdate = (key: string) => {
    if (key !== currentAnimKey.value) {
        currentAnimKey.value = key;
    }
};
</script>

<style scoped></style>
