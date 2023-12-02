import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import MainLayout from '../layouts/AuthLayout.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            layout: 'Main',
            componentLayout: MainLayout,
            public: true,
        }
    },
    {
        path: '/signin',
        name: 'Signin',
        component: () => import('../views/SigninView.vue'),
        meta: {
            layout: 'Auth',
            componentLayout: MainLayout,
            public: true,
        }
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/SignupView.vue'),
        meta: {
            layout: 'Auth',
            componentLayout: MainLayout,
            public: true,
        }
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;