<template>
  <div class="mx-auto flex justify-center w-full">
    <DatePicker v-model="date" inline />
  </div>
</template>

<script setup lang="ts">
import { DatePicker } from 'primevue'
import { ref } from 'vue'

const date = ref()
</script>

<style scoped></style>
