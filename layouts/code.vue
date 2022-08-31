<template>
    <div class="slidev-layout">
        <div class="grid grid-flow-col-dense gap-5 h-full w-full m-2 content-center">
            <slot />
        </div>
    </div>
  </template>
  
  <style scoped lang="postcss">
  .slidev-layout.end {
    @apply text-white text-opacity-85 text-xl tracking-widest bg-black h-full text-center grid place-content-center select-none;
  }
  </style>