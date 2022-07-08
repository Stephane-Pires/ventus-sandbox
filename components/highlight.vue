<template>
  <span class="highlight">
    <slot />
  </span> 
</template>

<style>
.highlight {
    @apply text-light-highlight dark:text-dark-highlight;
}
</style>