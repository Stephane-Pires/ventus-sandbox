<template>
  <div class="slidev-layout h-full grid place-content-center">
    <div>
      <slot name="title" />
    </div>
    <div class="my-auto card">
      <slot name="card"/>
    </div>
  </div>
</template>

<style>
  .card {
  @apply border-dark-warning border-5 bg-light-warning p-6 bg-opacity-15 border-opacity-15;
  }
</style>