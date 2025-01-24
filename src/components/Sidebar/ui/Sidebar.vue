<template>
  <NavDrawer v-model:show="showDrawer" />
  <Nav v-if="showMenu" />
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu.ts'
import { storeToRefs } from 'pinia'
import Nav from './Nav.vue'
import NavDrawer from './NavDrawer.vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const { showMenu, showDrawer } = storeToRefs(useMenuStore())
const { setShowDrawer } = useMenuStore()

const route = useRoute()

watch(route, () => {
  setShowDrawer(false)
})
</script>

<style scoped></style>
