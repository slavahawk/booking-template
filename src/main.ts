import './assets/css/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import StyleClass from 'primevue/styleclass'

import Ripple from 'primevue/ripple'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.directive('ripple', Ripple)
app.directive('styleclass', StyleClass)
app.use(PrimeVue, {
  locale: {
    firstDayOfWeek: 1,
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  },
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.app-dark',
    },
  },
  ripple: true,
})
app.use(createPinia())
app.use(router)

app.mount('#app')
