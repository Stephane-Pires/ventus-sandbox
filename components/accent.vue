<template>
  <span class="accent">
    <slot />
  </span> 
</template>

<style>
.accent {
    @apply text-brand-dark dark:text-brand-logo;
}
</style>