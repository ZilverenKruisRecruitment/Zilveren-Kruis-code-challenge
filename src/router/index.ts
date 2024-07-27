import { createRouter, createWebHistory } from 'vue-router';
import RegistrationPage from '../components/RegistrationPage/RegistrationPage.vue';

const routes = [
    {
        path: '/',
        name: 'Aanmelden Zilveren Kruis',
        component: RegistrationPage,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
