import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/signin',
        name: 'Signin',
        component: () => import('../views/SigninView.vue')
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/SignupView.vue')
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;