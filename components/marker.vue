<template>
  <span class="marker bg-$prism-background px-2 py-1 rounded font-mono inline-block text-0.4em transform translate-y-[-1.5em] translate-x-[-0.3em]"><slot/></span>
</template>

<style>
.marker  {
    @apply text-light-highlight dark:text-dark-highlight
}
</style>