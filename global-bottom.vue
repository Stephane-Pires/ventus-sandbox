s<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useNow } from '@vueuse/core'
const props = defineProps({
  eventLogo: {
    type: String,
  },
  eventUrl: {
    type: String,
  },
  twitter: {
    type: String,
  },
  twitterUrl: {
    type: String,
  },
})

const now  = useNow()
const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
const date = computed(() => now?.value.toLocaleDateString('fr', options))

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
  <!-- <footer
    v-if="
      $slidev.nav.currentLayout !== 'cover' &&
      $slidev.nav.currentPage !== 2 &&
      $slidev.nav.currentPage !== $slidev.nav.total + 1
    "
    class="absolute bottom-0 left-1 p-2 text-sm w-full"
  > -->
  <footer
    v-if="!LayoutWithoutFooter.includes($slidev.nav.currentLayout)"
    class="absolute bottom-0 p-2 text-sm w-full h-6"
  >
      <div 
    class="absolute bottom-0"
      v-if="!LayoutWithoutName.includes($slidev.nav.currentLayout)">
        Stéphane Pires
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

<style>
footer {
  @apply font-mono  text-brand-darker dark:text-brand-light bg-brand-light dark:bg-light-text;
}

</style>