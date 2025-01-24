<template>
  <div class="Exit">
    <Line />
    <div class="flex justify-between py-1 px-2">
      <div>
        <div class="font-bold">Вячеслав</div>
        <div class="font-small mt-[2px]">krylov_s10@mail.ru</div>
      </div>
      <Button variant="text" icon="pi pi-sign-out" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'primevue'
import Line from './Line.vue'
</script>

<style scoped lang="scss">
.Exit {
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 220px;
}
</style>
