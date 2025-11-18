import LoginPage from '@/views/pages/login/LoginPage.vue';
import { createRouter, createWebHistory } from 'vue-router/auto'
import ResetPassword from '@/views/pages/reset-password/ResetPassword.vue';
import CreateUser from '@/views/pages/create-user/CreateUser.vue';
import Index from '@/views/index.vue';
import donate from '@/router/modules/donate';
import received from '@/router/modules/received';
import stock from '@/router/modules/stock';

const routes = [

  {
    path: '/login',
    name: 'Login',
    meta: { auth: false },
    component: LoginPage, 
  },
 {
    name: 'ResetPassword',
    path: '/reset-password',
    component: ResetPassword,
    auth: { meta: false }
  },
  {
    name: 'CreateUser',
    path: '/create-user',
    component: CreateUser,
    auth: { meta: false }
  },
  {
    path: '/',
    redirect: '/doacoes',
    meta: { auth: true },
    component: Index,
    children: [
      ...donate,
      ...received,
      ...stock
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = true // Verificação simples
  if (!isAuthenticated && to.name !== 'Login') {
    // Redireciona para a rota de login se não autenticado e não estiver indo para login
    next('/login')
  } else {
    // Continua normalmente se não houver problemas
    next()
  }
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
