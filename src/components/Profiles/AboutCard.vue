<template>
    <div class="about-card w-120 min-h-50">
        <div class="mb-1 font-baloo font-size-10 pl-2">
            <div
                class="font-baloo text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 select-none"
            >
                About Me?
            </div>

            <div class="pt-20 shadow-lg flex flex-col rounded bg-gray-50">
                <!--头像区 -->
                <div class="flex">
                    <img src="/img/abcde.jpg" alt="avatar" class="ml-5 rounded-full w-30 h-30" />
                    <div class="flex flex-1 flex-col font-size-6 ml-20">
                        <p class="m-0 text-gray-500">abcde...</p>
                        <p class="m-0 text-gray-500">A Frontend Developer</p>
                    </div>
                </div>
                <!-- 链接区 -->
                <div class="flex ml-auto gap-1">
                    <Icon
                        icon="uil:github"
                        class="cursor-pointer"
                        size="14"
                        @click="() => jumpTo('https://github.com/abcde1239')"
                    />
                    <Icon
                        icon="material-symbols:book-2"
                        class="cursor-pointer"
                        size="14"
                        @click="() => jumpTo('')"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
function jumpTo(url: string) {
    window.location.href = url;
}
</script>

<style scoped></style>
