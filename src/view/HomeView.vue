<template>
    <vue-particles id="tsparticles" :options="options" class="-z-1" />
    <div class="flex flex-1 flex-col justify-center relative">
        <dragger-scale
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
            <title-text></title-text>
        </dragger-scale>

        <div class="cards-container flex flex-col reactive mt-100">
            <about-card
                class="absolute left-1/6 -translate-x-1/2"
                data-aos="flip-left"
            ></about-card>
            <tech-card
                class="absolute left-1/2 -bottom-100 -translate-x-1/2 translate-y-1/2"
                data-aos="flip-right"
            ></tech-card>
            <anim-card
                class="absolute left-1/6 -bottom-200 -translate-x-1/2"
                data-aos="flip-left"
            ></anim-card>
            <tech-card
                class="absolute left-1/2 -bottom-300 -translate-x-1/2 translate-y-1/2"
                data-aos="flip-right"
            ></tech-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'aos/dist/aos.css';
import AOS from 'aos';
import { tsParticlesOptions } from '@/utils/tsparticles';
import TitleText from '@/components/TitleText.vue';
import DraggerScale from '@/components/DraggerScale.vue';
import AboutCard from '@/components/Profiles/AboutCard.vue';
import TechCard from '@/components/Profiles/TechCard.vue';
import AnimCard from '@/components/Profiles/AnimCard.vue';
import GameCard from '@/components/Profiles/GameCard.vue';
import { onMounted } from 'vue';

const options = tsParticlesOptions;
onMounted(() => {
    document.body.classList.add('scrollbar-minimal');
    AOS.init({
        mirror: true,
    });
    setInterval(() => AOS.refresh(), 500);
});
</script>

<style scoped></style>
