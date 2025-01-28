<template>
  <CardItem :title="t('settings.title')">
    <div>
      <FloatLabel variant="on" class="floatLabel">
        <InputText id="name" v-model="form.name" />
        <label for="name">{{ t('settings.personal.name') }}</label>
      </FloatLabel>
      <FloatLabel variant="on" class="floatLabel">
        <Select
          id="lang"
          v-model="form.lang"
          :options="allLanguages"
          optionLabel="name"
          optionValue="code"
          class="w-full"
        />
        <label for="lang">{{ t('settings.personal.language') }}</label>
      </FloatLabel>
      <FloatLabel variant="on" class="floatLabel">
        <InputText id="city" v-model="form.city" />
        <label for="city">{{ t('settings.personal.city') }}</label>
      </FloatLabel>
      <FloatLabel variant="on" class="floatLabel">
        <Textarea v-model="form.description" rows="5" cols="30" />
        <label for="city">{{ t('settings.personal.description') }}</label>
      </FloatLabel>

      <Button label="Изменить данные" @click="saveForm" />
    </div>
  </CardItem>
</template>

<script setup lang="ts">
import CardItem from '@/components/card/CardItem.vue'
import { InputText, FloatLabel, Select, Button, Textarea } from 'primevue'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { allLanguages } from '@/lang/allLanguages.ts'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user.ts'
import { LANG } from '@/const/localStorage.ts'

const { user } = storeToRefs(useUserStore())
const { t, locale } = useI18n({ useScope: 'global' })

const form = reactive<any>({
  name: '',
  lang: '',
  city: '',
  description: '',
})

if (user.value) {
  form.name = user.value.name
}

if (localStorage.getItem(LANG)) {
  form.lang = localStorage.getItem(LANG)
  locale.value = form.lang
}

const saveForm = () => {
  locale.value = form.lang
  localStorage.setItem(LANG, form.lang)
}
</script>

<style scoped></style>
