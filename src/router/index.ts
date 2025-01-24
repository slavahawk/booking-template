import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

export enum AppRoutes {
  HOME = 'Home',
  SETTINGS = 'Settings',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/cabinet/info/',
  [AppRoutes.SETTINGS]: '/settings/menu',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: RoutePath.Home,
          name: AppRoutes.HOME,
          component: () => import('../views/HomeView.vue'),
          meta: { title: 'Настройки личных данных', subtitle: 'Личный кабинет' },
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: RoutePath.Settings,
          name: AppRoutes.SETTINGS,
          component: () => import('../views/SettingsView.vue'),
          meta: { title: 'Настройки' },
        },
      ],
    },
  ],
})

export default router
