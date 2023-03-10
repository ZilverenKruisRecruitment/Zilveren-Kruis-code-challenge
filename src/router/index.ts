import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [ // note that all routes besides 'register' are going back to home; they are only present for demonstration purposes
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/consumenten',
            name: 'consumenten',
            component: HomeView
        },
        {
            path: '/zorgaanbieders',
            name: 'zorgaanbieders',
            component: HomeView
        },
        {
            path: '/overons',
            name: 'overons',
            component: HomeView
        },
        {
            path: '/overons/pers',
            name: 'pers',
            component: HomeView
        },
        {
            path: '/zakelijk',
            name: 'zakelijk',
            component: HomeView
        },
    ]
});

export default router;
