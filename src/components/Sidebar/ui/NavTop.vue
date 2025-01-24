<template>
  <div class="nav__top flex justify-between items-center">
    <div class="flex items-center gap-2">
      <RouterLink :to="{ name: AppRoutes.HOME }">
        <i class="pi pi-prime" style="font-size: 24px"></i>
      </RouterLink>
      <div>Мистер бренд</div>
    </div>
    <i class="pi pi-bell"></i>
  </div>
</template>

<script setup lang="ts">
import { AppRoutes } from '@/router'
</script>

<style scoped lang="scss">
.nav__top {
  padding: 8px 12px;
  width: 100%;
}
</style>
