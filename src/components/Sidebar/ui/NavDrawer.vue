<template>
  <Drawer v-model:visible="isVisible" class="!w-[220px]" :show-close-icon="false">
    <template #header>
      <NavTop />
    </template>
    <Line class="mt-0 mb-4" />
    <NavCalendar />
    <Line class="my-4" />
    <NavMenu />
  </Drawer>
</template>

<script setup lang="ts">
import { Drawer } from 'primevue'
import { computed } from 'vue'
import NavTop from './NavTop.vue'
import NavCalendar from './NavCalendar.vue'
import Line from './Line.vue'
import NavMenu from './NavMenu.vue'
const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'update:show', bol: boolean): void
}>()

const isVisible = computed({
  get() {
    return props.show
  },
  set(value) {
    emit('update:show', value)
  },
})
</script>

<style>
.p-drawer-content {
  padding: 0 !important;
}
.p-drawer-header {
  padding: 0 !important;
}
</style>
