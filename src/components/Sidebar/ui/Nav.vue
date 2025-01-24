<template>
  <nav class="nav">
    <NavTop />
    <Line class="mt-0 mb-4" />
    <NavCalendar />
    <Line class="my-4" />
    <NavMenu />
    <Exit />
  </nav>
</template>

<script setup lang="ts">
import NavTop from './NavTop.vue'
import NavCalendar from './NavCalendar.vue'
import NavMenu from './NavMenu.vue'
import Line from './Line.vue'
import Exit from './Exit.vue'
</script>

<style scoped>
.nav {
  position: relative;
  background: var(--booking-color-main-white);
  width: 220px;
  height: auto;
}
</style>
