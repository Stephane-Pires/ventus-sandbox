<template>
  <div class="slidev-layout code">

    <div class="flex flex-col justify-center w-full">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout.code {
  @apply h-full grid;
  }
</style>