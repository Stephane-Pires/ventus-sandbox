<template>
  <span class="fail">
    <slot />
  </span> 
</template>

<style>
.fail {
    @apply text-light-fail dark:text-dark-fail;
}
</style>