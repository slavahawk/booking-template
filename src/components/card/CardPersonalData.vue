<template>
  <CardItem :title="t('settings.personal.title')">
    <div class="flex gap-2 justify-between">
      <div class="">
        <div class="uploadButton" ref="uploadButton" @click="openUpload">
          <div v-if="selectedFile">
            <img :src="selectedFile" />
            <div class="font-small naming">Загрузить фото</div>
          </div>
          <div v-else>
            <i class="pi pi-plus-circle" style="font-size: 24px"></i>
            <div class="font-small mt-1">Загрузить фото</div>
          </div>
        </div>
        <input
          type="file"
          id="file"
          ref="fileInput"
          @change="handleSubmit"
          accept="image/*"
          style="display: none"
        />
      </div>
      <div class="flex flex-col gap-2">
        <div class="font-large font-bold">{{ user.name }}</div>
        <div class="font-small flex items-center gap-2">
          <i class="pi pi-phone" /> {{ user.email }}
        </div>
        <div class="font-small flex items-center gap-2">
          <i class="pi pi-envelope" /> {{ user.phone }}
        </div>
      </div>
    </div>
  </CardItem>
</template>

<script setup lang="ts">
import CardItem from '@/components/card/CardItem.vue'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.ts'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const { user } = storeToRefs(useUserStore())

const fileInput = ref(null)
const uploadButton = ref(null)
const selectedFile = ref(null)

if (user.value) {
  selectedFile.value = user.value.img
}

const openUpload = () => {
  fileInput.value.click()
}

const handleSubmit = (event) => {
  const target = event.target
  const file = target.files[0]
  selectedFile.value = URL.createObjectURL(file)
  console.log(file)

  // Здесь будет логика отправки файла
}
</script>

<style scoped>
.uploadButton {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 100px;
  min-height: 100px;
  border: 1px solid #e7eaec;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  border-radius: var(--booking-border-radius-l);
  overflow: hidden;

  &:hover {
    background-color: var(--booking-color-accent-blue); /* Цвет фона при наведении */
    border-color: var(--booking-color-accent-blue); /* Цвет рамки при наведении */
    cursor: pointer;
  }
}

.uploadButton img {
  max-width: 100%;
  max-height: 100%;
}

.naming {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
