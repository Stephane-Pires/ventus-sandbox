<template>
  <span class="info">
    <slot />
  </span> 
</template>

<style>
.info {
    @apply text-light-info dark:text-dark-info;
}
</style>