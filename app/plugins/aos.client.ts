import AOS from 'aos'

export default defineNuxtPlugin(() => {
  if (import.meta.server) {
    return
  }
  AOS.init({
    duration: 750,
    easing: 'ease-out-cubic',
    once: true,
    offset: 72,
    delay: 0
  })
  const router = useRouter()
  router.afterEach(() => {
    nextTick(() => {
      AOS.refreshHard()
    })
  })
})
