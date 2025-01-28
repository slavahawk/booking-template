<template>
  <Card>
    <template #title>{{ title }}</template>
    <template #content><slot /> </template
  ></Card>
</template>

<script setup lang="ts">
import { Card } from 'primevue'
defineProps<{
  title: string
}>()
</script>

<style>
:root {
  --p-card-title-font-size: var(--booking-font-size-large) !important;
}
</style>
