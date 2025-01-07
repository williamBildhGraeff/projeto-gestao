
export default [
    {
        name: 'Login',
        path: '/',
        component: () => import('@/pages/views/Login/LoginPage.vue'),
        auth: { meta: false }
    }
]