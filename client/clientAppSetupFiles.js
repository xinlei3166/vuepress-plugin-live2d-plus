import { defineClientAppSetup } from '@vuepress/client'
import { onMounted } from 'vue'
import Live2d from './components/live2d'

const live2dOptions = __LIVE2D_OPTIONS__

export default defineClientAppSetup(() => {
  onMounted(() => {
    init()
  })

  // onBeforeUnmount(() => waline?.destroy())

  function init() {
    setTimeout(() => {
      if (!document) return
      Live2d.init({ live2dOptions })
    }, 500)
  }
})
