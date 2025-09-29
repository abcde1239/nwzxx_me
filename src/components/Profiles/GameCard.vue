<template>
    <div class="game-card w-120 min-h-50">
        <div class="mb-1 font-baloo font-size-10">
            Game?

            <!-- 图片区 -->
            <div class="shadow-lg flex flex-col rounded bg-gray-50 pt-5">
                <div class="flex justify-center">
                    <transition
                        mode="out-in"
                        enter-active-class="transition-all duration-200 ease-in-out opacity-100"
                        leave-active-class="transition-all duration-200 ease-in-out opacity-0"
                    >
                        <img
                            :src="`/img/game/${currentGame?.key}.background.jpg`"
                            alt="game-bg"
                            class="flex w-110"
                        />
                    </transition>
                </div>
                <!-- 头像区 -->
                <div class="flex flex-1 gap-1">
                    <div
                        v-for="game in gameList"
                        :key="game.key"
                        @click="handleShownGameUpdate(game.key)"
                    >
                        <img
                            :src="`/img/game/${game.key}.jpg`"
                            alt="icon"
                            class="m-1 p-2 w-20 rounded-xl shadow-lg hover-scale-105 cursor-pointer"
                        />
                    </div>
                </div>
                <!-- 介绍区 -->
                <div class="flex flex-1 flex-col py-0 pl-4">
                    <p class="m-0 font-bold font-size-8">{{ currentGame?.name }}</p>
                    <p class="m-0 text-gray-500 font-size-6">{{ currentGame?.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const gameList = [
    { name: 'VA-11 Hall-A', key: 'vallhalla', desc: 'My favorite game' },
    { name: 'Terraria', key: 'terraria', desc: " My longest-play-time's game" },
];
const currentGameKey = ref('vallhalla');
const currentGame = computed(() =>
    gameList.find((game) => {
        if (game.key === currentGameKey.value) return game;
    }),
);

const handleShownGameUpdate = (key: string) => {
    if (key !== currentGameKey.value) {
        currentGameKey.value = key;
    }
};
</script>

<style scoped></style>
