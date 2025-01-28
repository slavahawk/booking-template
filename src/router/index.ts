import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

export enum AppRoutes {
  HOME = 'Home',
  SETTINGS = 'Settings',
  TIME_TABLE = 'TimeTable',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/cabinet/info/',
  [AppRoutes.SETTINGS]: '/settings/menu',
  [AppRoutes.TIME_TABLE]: '/timetable',
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
          path: RoutePath.Settings,
          name: AppRoutes.SETTINGS,
          component: () => import('../views/SettingsView.vue'),
          meta: { title: 'Настройки' },
        },
        {
          path: RoutePath.TimeTable,
          name: AppRoutes.TIME_TABLE,
          component: () => import('../views/TimetableView.vue'),
          meta: { title: 'Календарь' },
        },
      ],
    },
  ],
})

export default router
