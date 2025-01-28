<template>
  <PanelMenu :model="items" class="w-full px-2">
    <template #item="{ item }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a
          v-ripple
          class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2"
          :href="href"
          @click="navigate"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a
        v-else
        v-ripple
        class="flex items-center cursor-pointer text-surface-700 dark:text-surface-0 px-4 py-2"
        :href="item.url"
        :target="item.target"
      >
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
      </a>
    </template>
  </PanelMenu>
</template>

<script setup lang="ts">
import { PanelMenu } from 'primevue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { AppRoutes } from '@/router'

const router = useRouter()

const items = ref([
  {
    label: 'Клиенты',
    icon: 'pi pi-palette',
    items: [
      {
        label: 'Клиент 1',
        icon: 'pi pi-eraser',
        route: '/theming/styled',
      },
    ],
  },
  {
    label: 'Сотрудники',
    icon: 'pi pi-home',
    items: [
      {
        label: 'Vue.js',
        icon: 'pi pi-star',
        url: 'https://vuejs.org/',
      },
      {
        label: 'Vite.js',
        icon: 'pi pi-bookmark',
        url: 'https://vuejs.org/',
      },
    ],
  },
  {
    label: 'Обзор',
    icon: 'pi pi-home',
    items: [
      {
        label: 'Vue.js',
        icon: 'pi pi-star',
        url: 'https://vuejs.org/',
      },
      {
        label: 'Vite.js',
        icon: 'pi pi-bookmark',
        url: 'https://vuejs.org/',
      },
    ],
  },
  {
    label: 'Настройки',
    icon: 'pi pi-spin pi-cog',
    command: () => {
      router.push({ name: AppRoutes.SETTINGS })
    },
  },
])
</script>

<style scoped></style>
