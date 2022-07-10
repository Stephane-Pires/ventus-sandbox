<script setup lang="ts">
const props = defineProps(
    {
        type: 'accent' | 'highlight' | 'info' | 'warning',
    }
        )
</script>

<template>
  <span :class="props.type">
    <slot />
  </span> 
</template>

<style scoped>
.warning {
    @apply text-light-warning dark:text-dark-warning;
}
.highlight {
    @apply text-light-highlight dark:text-dark-highlight;
}

.accent {
    @apply text-brand-dark dark:text-brand-logo;
}

.info {
    @apply text-light-info dark:text-dark-info;
}
</style>