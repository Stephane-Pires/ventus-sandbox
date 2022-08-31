<script setup lang="ts">
import { computed } from 'vue'
import { useNow } from '@vueuse/core'

const now  = useNow()
const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
const date = computed(() => now?.value.toLocaleDateString($slidev.configs.dateFormat, options))

  const LayoutWithoutDate = [
      'image-right',
      'iframe-right',
      'image-left',
      'iframe-left',
  ]
  
const LayoutWithoutFooter = [
    'iframe',
    ...LayoutWithoutDate
]


const LayoutWithoutName = [
    'image-left',
    'iframe-left',
]

const LayoutWithoutPageNumber = [
    'image-right',
    'iframe-right',
]

</script>



<template>
  <footer
    v-if="!LayoutWithoutFooter.includes($slidev.nav.currentLayout)"
    class="absolute bottom-0 p-2 text-sm w-full h-6"
  >
      <div 
    class="absolute bottom-0"
      v-if="!LayoutWithoutName.includes($slidev.nav.currentLayout)">
      

        {{ $slidev.configs.presenterName }}
      
      </div>
      <div 
      v-if="!LayoutWithoutDate.includes($slidev.nav.currentLayout)" class="absolute bottom-0 left-100"> {{date}}</div>
      <div
      v-if="!LayoutWithoutPageNumber.includes($slidev.nav.currentLayout)"
        class="text-xs absolute bottom-0 right-2"
      >
        {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
      </div>
  </footer>
</template>

<style scoped>
footer {
  @apply font-mono  text-brand-darker dark:text-brand-light bg-brand-light dark:bg-light-text;
}

</style>