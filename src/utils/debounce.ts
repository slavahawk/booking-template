export const debounce = (fn: () => void, delay: number) => {
  let timeoutId: number | undefined

  return function (...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = window.setTimeout(() => {
      fn(...args)
      timeoutId = undefined
    }, delay)
  }
}
