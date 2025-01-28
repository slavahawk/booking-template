<template>
  <Drawer v-model:visible="isVisible" :header="t('settings.notifications')" position="right">
    <div>
      <div class="icon__notification ml-auto mr-auto mb-2">
        <i class="pi pi-bell"></i>
      </div>
      <p class="font-default">
        В данный момент нет никаких уведомлений. В скором времени они у вас появятся
      </p>
    </div>
  </Drawer>
</template>

<script setup lang="ts">
import { Drawer } from 'primevue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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

<style scoped>
.icon__notification {
  width: 50px;
  height: 50px;
  background: var(--booking-custom-background-super-light-gray);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
