<template>
  <span class="accent">
    <slot />
  </span> 
</template>

<style>
.accent {
    @apply text-light-accent dark:text-dark-accent;
}
</style>