import { createRouter, createWebHistory } from 'vue-router'


const routes = [{
        path: '/',
        name: 'Index',
        component: () =>
            import ('../views/Index.vue'),
        meta: { transition: 'fade' }
    },
    {
        path: '/m-menu',
        name: 'mobileMenu',
        component: () =>
            import ('../views/mobileMenu.vue'),
        meta: { transition: 'slideLeft' }
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue'),
        meta: { transition: 'slideRight' }
    },
    {
        path: '/darkbtn',
        name: 'darkBtn',
        component: () =>
            import ('../components/darkButton.vue'),

    },
    {
        path: '/mentor',
        name: 'Mentor',
        component: () =>
            import ('@/views/Mentor.vue'),
        meta: { transition: 'slideLeft' }
    },
    {
        path: '/cours',
        name: 'Cours',
        component: () =>
            import ('@/views/Cours.vue'),
        meta: { transition: 'slideLeft' }
    },
    {
        path: '/exercices',
        name: 'Exercices',
        component: () =>
            import ('@/views/Exercices.vue'),
        meta: { transition: 'slideLeft' }
    },
    {
        path: '/forum',
        name: 'Forum',
        component: () =>
            import ('@/views/Forum.vue'),
        meta: { transition: 'slideLeft' }
    },
    {
        path: '/quisommesnous',
        name: 'Quisommesnous',
        component: () =>
            import ('@/views/QuiSommesNous.vue')
    },
    {
        path: '/testCarousel',
        name: 'testCarousel',
        component: () =>
            import ('@/views/TestCarousel.vue')
    },
    {
        path: '/monCompte',
        name: 'MonCompte',
        component: () =>
            import ('@/views/MonCompte.vue'),
        meta: { transition: 'fadeMask' }
    },
    {
        path: '/cours/c_videos',
        name: 'coursVideo',
        component: () =>
            import ('@/views/Cours/C_Videos.vue')
    },
    {
        path: '/components/Slogan',
        name: 'Slogan',
        component: () =>
            import ('../components/Slogan.vue'),
        meta: { transition: 'slideLeft' }
    },
    {
        path: '/microModal',
        name: 'NewAccount',
        component: () =>
            import ('../components/NewAccount.vue'),
        meta: { transition: 'fadeMask' }
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router