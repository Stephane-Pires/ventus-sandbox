<template>
  <div class="slidev-layout bullet-points">
    <div class="my-auto w-full">
        <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.bullet-points {
  @apply h-full grid;
  /* ul {
    @apply text-2xl;
    @apply text-light-title dark:text-dark-title;
  } */
}
</style>