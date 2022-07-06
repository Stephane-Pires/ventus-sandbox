<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  number?: number | string
}>()
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full">
    <figure class="w-1/2">
        <div
          :src="$attrs.presenterImage"
          class="absolute -left-70 -top-15 rounded-full object-cover h-170 w-170 border border-30 border-number z-10"
        >
        <div class="flex w-full h-full text-31xl items-center justify-end -ml-20 section-number ">
       {{ props.number }}
        </div>
 
        
        </div>
      </figure>
    <div class="slidev-layout center text-center flex flex-col justify-center" :class="props.class">
      <slot />
    </div>
  </div>
</template>

<style>
.border-number {
    @apply border-light-warning dark:border-dark-warning;
}

.section-number {
    @apply text-light-warning dark:text-dark-warning
}
</style>
