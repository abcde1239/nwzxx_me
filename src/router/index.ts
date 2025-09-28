import HomeView from '@/view/HomeView.vue';
import { createMemoryHistory, createRouter } from 'vue-router';
const routes = [
    {
        path: '/',
        component: HomeView,
        name: 'home',
    },
];
export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
