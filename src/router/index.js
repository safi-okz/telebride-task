import { createRouter, createWebHistory } from 'vue-router';
import { storeToRefs } from 'pinia';
import LoginView from '../views/LoginView.vue';
import { useAuthStore } from '../stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
          path: '/',
          redirect: '/login'
        },
        {
          path: '/login',
          name: 'LoginView',
          component: LoginView
        },
        {
          path: '/dashboard',
          name: "Dashboard",
          component: () => import('../views/Dashboard.vue')
        }
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const { token } = storeToRefs(authStore);
  
  if (to.name !== 'LoginView' && !token.value) {
    next({ name: 'LoginView' });
  } else if (to.name === 'LoginView' && token.value) {
    next({ name: 'Dashboard' });
  } else {
    next();
  }
})

export default router
