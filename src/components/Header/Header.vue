<template>
  <header class="Header flex items-center gap-4 px-6">
    <Button
      v-if="!showMenu"
      @click="setShowDrawer(!showDrawer)"
      class="ml-4"
      icon="pi pi-bars"
    ></Button>
    <div>
      <h2>{{ route.meta.title }}</h2>
      <span v-if="route.meta.subtitle" class="mt-1 font-small block">
        {{ route.meta.subtitle }}
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Button } from 'primevue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/stores/menu.ts'
import { storeToRefs } from 'pinia'

const route = useRoute()
const { setShowDrawer } = useMenuStore()
const { showDrawer, showMenu } = storeToRefs(useMenuStore())
</script>

<style scoped>
.Header {
  background: var(--booking-color-main-white);
  height: 90px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
}

span {
  color: var(--booking-color-main-light-grey);
}
</style>
