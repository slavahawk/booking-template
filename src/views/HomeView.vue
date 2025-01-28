<script setup lang="ts">
import CardItem from '@/components/card/CardItem.vue'
import CardPersonalData from '@/components/card/CardPersonalData.vue'
import CardSettings from '@/components/card/CardSettings.vue'
</script>

<template>
  <div class="grid grid-cols-[1fr_2fr] gap-6">
    <div class="flex flex-col gap-6">
      <CardPersonalData />
      <CardItem title="Подключенные аккаунты"> sds </CardItem>
      <CardItem title="Уведомления"> sds </CardItem>
      <CardItem title="Управление персональными данными"> sds </CardItem>
    </div>
    <CardSettings />
  </div>
</template>

<style scoped></style>
