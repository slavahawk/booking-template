<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header/Header.vue'
import { Sidebar } from '@/components/Sidebar'
</script>

<template>
  <main>
    <Sidebar />
    <div class="content">
      <Header />
      <div class="p-2">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  min-height: 100vh;
}

.content {
  border-left: var(--booking-custom-border);
  flex: 1;
}
</style>
