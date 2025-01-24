export const debounce = <T extends (...args: any[]) => void>(fn: T, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined // Use `ReturnType` for proper typing

  return function (...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      fn(...args) // Call the function with its arguments
      timeoutId = undefined
    }, delay)
  }
}
