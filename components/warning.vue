<template>
  <span class="warning">
    <slot />
  </span> 
</template>

<style>
.warning {
    
    @apply text-light-warning dark:text-dark-warning;
}
</style>