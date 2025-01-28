<template>
  <div class="nav__top flex justify-between items-center">
    <div class="flex items-center gap-2">
      <RouterLink :to="{ name: AppRoutes.HOME }">
        <i class="pi pi-prime" style="font-size: 24px"></i>
      </RouterLink>
      <div>Мистер бренд</div>
    </div>
    <Button icon="pi pi-bell" variant="text" @click="showNotification = true"></Button>
    <DrawNotification v-model:show="showNotification" />
  </div>
</template>

<script setup lang="ts">
import DrawNotification from '@/components/Notification/DrawNotification.vue'
import { ref } from 'vue'
import { AppRoutes } from '@/router'
import { Button } from 'primevue'

const showNotification = ref(false)
</script>

<style scoped>
.nav__top {
  padding: 8px 12px;
  width: 100%;
}
</style>
