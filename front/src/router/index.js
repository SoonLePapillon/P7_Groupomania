import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Signup from '@/views/SignupView.vue'

const routes = [
    {
        path: '/', 
        name: 'Home', 
        component: Home
    },
    {
        path: '/signup', 
        name: 'Signup', 
        component: Signup
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router