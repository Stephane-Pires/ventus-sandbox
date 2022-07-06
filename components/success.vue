
<template>
  <span class="success">
    <slot />
  </span> 
</template>

<style>
.success {
    @apply text-light-success dark:text-dark-success;
}
</style>