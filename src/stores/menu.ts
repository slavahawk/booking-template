import { onMounted, ref, onBeforeUnmount } from 'vue'
import { defineStore } from 'pinia'
import { debounce } from '@/utils/debounce.ts'

const SIZE_DESKTOP = 768
const DELAY = 300

export const useMenuStore = defineStore('menu', () => {
  const showMenu = ref(true)
  const showDrawer = ref(false)

  const setShowMenu = (value: boolean) => {
    showMenu.value = value
  }

  const setShowDrawer = (value: boolean) => {
    showDrawer.value = value
  }

  const updateMenuVisibility = () => {
    const isDesktop = window.innerWidth >= SIZE_DESKTOP

    // Если боковое меню отображает, а ширина экрана больше или равна допустимой, скрываем боковое меню
    if (showDrawer.value && isDesktop) {
      setShowDrawer(false)
    }

    // Устанавливаем видимость основного меню в зависимости от ширины экрана
    setShowMenu(isDesktop)
  }

  const debouncedResize = debounce(updateMenuVisibility, DELAY)

  updateMenuVisibility()
  onMounted(() => {
    window.addEventListener('resize', debouncedResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', debouncedResize)
  })

  return { showMenu, showDrawer, setShowMenu, setShowDrawer }
})
